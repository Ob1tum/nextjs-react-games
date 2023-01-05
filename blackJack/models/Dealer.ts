import Game from "./Game";
import Player from "./Player";

export default class Dealer extends Player {
  private calcWinnings(players: Player[], roundResults: { [key: number]: boolean }) {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (roundResults[player.id]) {
        player.balance += player.bet;
      } else {
        player.balance -= player.bet;
      }
    }
  }

  startPlay({ players }: Game) {
    // TODO: start this method, when all players stand
    // this logic decides whether to take a card or not

    // code here...

    // end of this method
    const dealerScore = this.getScore();
    const result: { [key: number]: boolean } = {};
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      result[player.id] = !player.overflow && player.getScore() > dealerScore;
    }

    this.calcWinnings(players, result);
  }
}
