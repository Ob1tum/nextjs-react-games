import { FC, useEffect, useState } from "react";
import Game from "../../models/Game";
import Player from "../../models/Player";
import classes from "./GameComponent.module.scss";

const GameComponent: FC = () => {
  const [game, setGame] = useState(new Game());

  useEffect(() => {
    setGame(game.initGame(2));
  }, [])

  const { deck } = game;

  const addCardToPlayer = (player: Player) => {
    player.takeCard(deck.getNextCard());
    setGame(game.updateGame());
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
      <button type="button" onClick={() => addCardToPlayer(p)}>hit</button>
      <button type="button">stand</button>
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
