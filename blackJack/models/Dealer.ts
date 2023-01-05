import Deck from "./Deck";
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
    else coefficient += this.getCoefficientByScore(player.getScore());

    if (split) {
      if (splitOverflow) coefficient -= 1;
      else coefficient += this.getCoefficientByScore(player.getSplitedScore());
    }

    return coefficient;
  }

  private fillHand1vs1(player: Player, deck: Deck) {
    const { split, overflow, splitOverflow } = player;
    const score = player.getScore();

    if (split && !splitOverflow) {
      if (overflow) return;

      const splitedScore = player.getSplitedScore();
      while (this.getScore() < score && this.getScore() < splitedScore) {
        this.takeCard(deck.getNextCard());
      }
    } else {
      if (overflow) return;

      while (this.getScore() < score) {
        this.takeCard(deck.getNextCard());
      }
    }

    if (this.getScore() > 21) this.overflow = true;
    console.log(this.getScore());
  }

  private fillHand(players: Player[], deck: Deck) {
    if (players.length === 1) {
      const player = players[0];
      this.fillHand1vs1(player, deck);
    } else {
      // TODO: think about
    }
  }

  startPlay({ players, deck }: Game) {
    this.fillHand(players, deck);

    const result: { [key: number]: number } = {};
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      result[player.id] = this.defineBetCoefficientForPlayer(player);
    }

    this.calcWinnings(players, result);
  }
}
