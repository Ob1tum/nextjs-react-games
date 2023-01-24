import Deck from './Deck';
import Game from './Game';
import Player from './Player';

export default class Dealer extends Player {
  private calcWinnings(players: Player[], roundResults: { [key: number]: number }) {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (roundResults[player.id] > 0) player.won = true;
      if (roundResults[player.id] < 0) player.lose = true;
      if (player.double) {
        player.balance += player.bet * 2 * roundResults[player.id];
      } else {
        player.balance += player.bet * roundResults[player.id];
      }
    }
  }

  private getCoefficientByScore(score: number): number {
    if (this.overflow) return 1;

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
    else {
      coefficient += this.getCoefficientByScore(player.getScore());
    }

    if (split) {
      if (splitOverflow) coefficient -= 1;
      else coefficient += this.getCoefficientByScore(player.getSplitedScore());
    }

    return coefficient;
  }

  private findAverageHand(players: Player[]): number {
    const scoreArr: number[] = [];

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const { split, overflow, splitOverflow } = player;

      const score = player.getScore();

      if (split && !splitOverflow) {
        if (overflow) continue;

        const splitedScore = player.getSplitedScore();
        scoreArr.push(score, splitedScore);
      } else {
        if (overflow) continue;

        scoreArr.push(score);
      }
    }
    return scoreArr.length ? scoreArr[Math.floor(scoreArr.length / 2)] : 0;
  }

  private fillHand(deck: Deck) {
    while (this.getScore() < 17) {
      this.takeCard(deck.getNextCard());
    }

    if (this.getScore() > 21) this.overflow = true;
  }

  startPlay({ players, deck }: Game) {
    this.fillHand(deck);

    const result: { [key: number]: number } = {};
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      result[player.id] = this.defineBetCoefficientForPlayer(player);
    }

    this.calcWinnings(players, result);
  }
}
