import Game from "./Game";
import Player from "./Player";

export default class Dealer extends Player {
  private calcWinnings(players: Player[], roundResults: { [key: number]: number }) {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      player.balance += player.bet * roundResults[player.id]; 
    }
  }

  private getCoefficientByScore(score: number): number {
    let coefficient = 0;
    const dealerScore = this.getScore();
    if (score > dealerScore) coefficient += 1;
    else if (score < dealerScore) coefficient -= 1;

    return coefficient;
  }

  private defineBetCoefficientForPlayer(player: Player): number {
    const { overflow, split, splitOverflow } = player;
    let coefficient = 0;

    if (overflow) coefficient -= 1;
    else coefficient += this.getCoefficientByScore(player.getScore());

    if (split) {
      if (splitOverflow) coefficient -= 1;
      else coefficient += this.getCoefficientByScore(player.getSplitedScore());
    }

    return coefficient;
  }

  startPlay({ players }: Game) {
    // TODO: start this method, when all players stand
    // this logic decides whether to take a card or not

    // code here...

    // end of this method
    const result: { [key: number]: number } = {};
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      result[player.id] = this.defineBetCoefficientForPlayer(player);
    }

    this.calcWinnings(players, result);
  }
}
