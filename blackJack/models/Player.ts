import Card from "./Card";
import { getCardScore } from "./CardName";

export default class Player {
  id: number;
  balance: number = 1000;
  cards: Card[] = [];

  bet: number = 25;
  standed: boolean = false;
  overflow: boolean = false;

  private splitSecondRound = false;
  splitedCards: Card[] = [];
  split: boolean = false;
  splitOverflow: boolean = false;

  constructor(hand: Card[]) {
    this.cards.push(...hand);
  }

  getScore(): number {
    let score = 0;
    for (let i = 0; i < this.cards.length; i++) {
      score += getCardScore(this.cards[i].name);
    }

    return score;
  }

  getSplitedScore(): number {
    let score = 0;
    for (let i = 0; i < this.splitedCards.length; i++) {
      score += getCardScore(this.splitedCards[i].name);
    }

    return score;
  }

  private resetHand(cards: Card[]) {
    this.cards = [...cards];
  }

  takeCard(card: Card) {
    this.cards.push(card);
    if (this.getScore() > 21) this.overflow = true;
  }

  stand() {
    if (!this.split) {
      this.standed = true;
    } else {
      if (this.splitSecondRound) { 
        this.standed = true;
        return;
      }
      const temp = [...this.cards];
      this.cards = [...this.splitedCards];
      this.splitedCards = [...temp];
      this.splitSecondRound = true;
      this.splitOverflow = this.overflow;
      this.overflow = false;
    }
  }

  isSplitPossible(): boolean {
    if (this.cards.length !== 2) return false;

    return getCardScore(this.cards[0].name) === getCardScore(this.cards[1].name);
  }

  nextRound(cards: Card[]) {
    this.overflow = false;
    this.standed = false;
    this.split = false;
    this.splitSecondRound = false;
    this.splitedCards = [];
    this.cards = [];
    this.splitOverflow = false;
    this.resetHand(cards);
  }

  splitHand(firstMissing: Card, secondMissing: Card) {
    this.split = true;
    this.splitedCards = [this.cards[1], secondMissing];
    this.cards = [this.cards[0], firstMissing];
  }

  changeBet(amount: number) {
    this.bet = amount;
  }
}
