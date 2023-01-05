import Dealer from "./Dealer";
import Deck from "./Deck";
import Player from "./Player";

export default class Game {
  deck: Deck = new Deck();
  dealer: Dealer;
  players: Player[] = [];

  private getCopy(): Game {
    const newGame = new Game();
    newGame.deck = this.deck;
    newGame.players = this.players;
    return newGame;
  }

  initGame(playersCount: number): Game {
    this.dealer = new Dealer(this.deck.getNextHand());

    for (let i = 1; i < playersCount; i++) {
      this.players.push(new Player(this.deck.getNextHand()));
    }

    return this.updateGame();
  }

  updateGame(): Game {
    return this.getCopy();
  }

}
