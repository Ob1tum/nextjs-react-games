import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import Game from '../../models/Game';
import Player from '../../models/Player';
import { indicateCardPic } from '../../helpers/CardDB';

import {
  GameContainer,
  PlayersContainer,
  PlayerInfo,
  Card,
  Button,
  CardsWrapper,
  HandWrapper,
  ButtonsWrapper,
  Balance,
  Bank,
  Bet,
} from './index';

const GameComponent: FC = () => {
  const [game, setGame] = useState(new Game());
  const [roundFinished, setRoundFinished] = useState(false);
  const [isDealerTurn, setDealerTurn] = useState(false);

  useEffect(() => {
    setGame(game.initGame(1)); // players count
  }, []);

  const { deck, dealer } = game;

  console.log(dealer);

  const passTurnToDealer = () => {
    dealer.startPlay(game);
    setDealerTurn(true);
    setGame(game.updateGame());
    setRoundFinished(true);

    setTimeout(() => {
      setGame(game.nextRound());
      setDealerTurn(false);
      setRoundFinished(false);
    }, 2000);
  };
  const standPlayerHand = (player: Player, double: boolean) => {
    if (double) {
      player.double = true;
      player.takeCard(deck.getNextCard());
    }
    player.stand();
    const playersInGame = game.players.filter((p) => !p.standed);
    if (!playersInGame || playersInGame.length === 0) {
      passTurnToDealer();
    }
    setGame(game.updateGame());
  };

  const addCardToPlayer = (player: Player) => {
    player.takeCard(deck.getNextCard());
    if (player.overflow) standPlayerHand(player, false);
    setGame(game.updateGame());
  };

  const splitPlayerHand = (player: Player) => {
    if (!player.isSplitPossible()) return;
    player.splitHand(deck.getNextCard(), deck.getNextCard());
    setGame(game.updateGame());
  };

  const changeBet = (player: Player, sym: string) => {
    if (player.balance > player.bet && sym === '+') player.bet += 25;
    if (player.bet > 25 && sym === '-') player.bet -= 25;
    setGame(game.updateGame());
  };

  const fullDealerHand = dealer && [...dealer.cards].slice(1);

  const dealerInfo = dealer && (
    <PlayerInfo>
      <HandWrapper>
        {!isDealerTurn
          ? dealer.cards.map((c, index) => (
              <Card zInd={index} key={uuidv4()}>
                <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={indicateCardPic(c.name, c.suit)} width="180" height="270" />
                </div>
              </Card>
            ))
          : fullDealerHand.map((c, index) => (
              <Card zInd={index} key={uuidv4()}>
                <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={indicateCardPic(c.name, c.suit)} width="180" height="270" />
                </div>
              </Card>
            ))}
      </HandWrapper>
      <div>СЧЁТ: {dealer.getScore()}</div>
    </PlayerInfo>
  );
  const players = game.players.map((p) => (
    <PlayerInfo key={uuidv4()}>
      <div>СЧЁТ: {p.getScore()}</div>
      <CardsWrapper>
        <HandWrapper>
          {p.cards.map((c, index) => (
            <Card zInd={index} key={uuidv4()}>
              <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <Image src={indicateCardPic(c.name, c.suit)} width="180" height="270" />
              </div>
            </Card>
          ))}
        </HandWrapper>
        {p.split && (
          <HandWrapper>
            {p.splitedCards.map((c, index) => (
              <Card zInd={index} key={uuidv4()}>
                <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={indicateCardPic(c.name, c.suit)} width="180" height="270" />
                </div>
              </Card>
            ))}
          </HandWrapper>
        )}
      </CardsWrapper>
      <ButtonsWrapper>
        <Button onClick={() => !roundFinished && addCardToPlayer(p)}>ЕЩЁ</Button>
        <Button onClick={() => !roundFinished && standPlayerHand(p, true)}>УДВОИТЬ</Button>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <Button onClick={() => !roundFinished && standPlayerHand(p, false)}>СЕБЕ</Button>
        {!p.split && p.isSplitPossible() && (
          <Button onClick={() => !roundFinished && splitPlayerHand(p)}>РАЗБИТЬ</Button>
        )}
      </ButtonsWrapper>
      <Bank>
        <Balance>
          <div>БАЛАНС</div>
          <div> {p.balance}</div>
        </Balance>
        <Bet>
          <button type="button" onClick={() => changeBet(p, '-')}>
            -
          </button>
          <div>СТАВКА</div>
          <div>{p.bet}</div>
          <button type="button" onClick={() => changeBet(p, '+')}>
            +
          </button>
        </Bet>
      </Bank>
    </PlayerInfo>
  ));

  return (
    <GameContainer>
      <PlayersContainer>{dealerInfo}</PlayersContainer>
      <PlayersContainer>{players}</PlayersContainer>
    </GameContainer>
  );
};

export default GameComponent;
