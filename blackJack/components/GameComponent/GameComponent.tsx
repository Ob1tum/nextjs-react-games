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
  Score,
  Win,
  Lose,
  ResultWrapper,
} from './index';

type SingleCard = {
  name: number;
  suit: string;
};

const GameComponent: FC = () => {
  const [game, setGame] = useState(new Game());
  const [roundFinished, setRoundFinished] = useState(false);
  const [isDealerTurn, setDealerTurn] = useState(false);

  useEffect(() => {
    setGame(game.initGame(1)); // players count
  }, []);

  const { deck, dealer } = game;

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

  const showCards = (cards: SingleCard[]) =>
    cards.map((c, index) => (
      <Card style={{ zIndex: index, left: `${index * 80}px` }} key={uuidv4()}>
        <Image src={indicateCardPic(c.name, c.suit)} layout="fill" />
      </Card>
    ));

  const fullDealerHand = dealer && [...dealer.cards].slice(1);

  const dealerInfo = dealer && (
    <PlayerInfo>
      <CardsWrapper>
        <Score>{dealer.getScore()}</Score>
        <HandWrapper>
          {!isDealerTurn ? showCards(dealer.cards) : showCards(fullDealerHand)}
        </HandWrapper>
      </CardsWrapper>
    </PlayerInfo>
  );
  const players = game.players.map((p) => (
    <PlayerInfo key={uuidv4()}>
      <ResultWrapper>
        {p.won && !p.blackjack && <Win>ВЫ ПОБЕДИЛИ</Win>}
        {p.lose && <Lose>ВЫ ПРОИГРАЛИ</Lose>}
        {p.blackjack && <Win>BLACKJACK</Win>}
      </ResultWrapper>

      <CardsWrapper>
        <Score>{p.getScore()}</Score>
        <HandWrapper>{showCards(p.cards)}</HandWrapper>
        {p.split && <HandWrapper>{showCards(p.splitedCards)}</HandWrapper>}
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
