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
    newGame.dealer = this.dealer;
    return newGame;
  }

  initGame(playersCount: number): Game {
    this.dealer = new Dealer(this.deck.getNextHand());

    for (let i = 0; i < playersCount; i++) {
      const newPlayer = new Player(this.deck.getNextHand());
      newPlayer.id = i;
      this.players.push(newPlayer);
    }

    return this.updateGame();
  }

  nextRound(): Game {
    this.deck = new Deck();
    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      player.nextRound(this.deck.getNextHand());
    }
    this.dealer.nextRound(this.deck.getNextHand());

    return this.getCopy();
  }

  updateGame(): Game {
    return this.getCopy();
  }

}
