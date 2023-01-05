import { FC, useEffect, useState } from "react";
import Game from "../../models/Game";
import Player from "../../models/Player";
import classes from "./GameComponent.module.scss";

const GameComponent: FC = () => {
  const [game, setGame] = useState(new Game());
  const [roundFinished, setRoundFinished] = useState(false);

  useEffect(() => {
    setGame(game.initGame(1)); // players count
  }, [])

  const { deck, dealer } = game;

  const addCardToPlayer = (player: Player) => {
    player.takeCard(deck.getNextCard());
    if (player.overflow) playerStanded(player);
    setGame(game.updateGame());
  }

  const playerStanded = (player: Player) => {
    player.stand();
    const playersInGame = game.players.filter((p) => !p.standed);
    if (!playersInGame || playersInGame.length === 0) {
      passTurnToDealer();
    }
  }

  const passTurnToDealer = () => {
    dealer.startPlay(game);
    setGame(game.updateGame());
    setRoundFinished(true);

    setTimeout(() => {
      setGame(game.nextRound());
      setRoundFinished(false);
    }, 2000);
  }

  const players = game.players.map((p) => (
    <div className={classes.PlayerInfo}>
      <div>balance: {p.balance}</div>
      {p.cards.map((c) => (
        <div className={classes.Card}>
          <div>suit: {c.suit}</div>
          <div>name: {c.name}</div>
        </div>
      ))}
      <div>score: {p.getScore()}</div>
      {!roundFinished && <button type="button" onClick={() => addCardToPlayer(p)}>hit</button>}
      {!roundFinished && <button type="button" onClick={() => playerStanded(p)}>stand</button>}
    </div>
  ));

  return (
    <div className={classes.Game}>
      <div className={classes.PlayersContainer}>
        {players}
      </div>
    </div>
  );
}

export default GameComponent;
