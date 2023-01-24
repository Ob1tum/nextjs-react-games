import Card from './Card';
import { getCardScore } from './CardName';

export default class Player {
  id: number;

  balance = 1000;

  cards: Card[] = [];

  bet = 25;

  standed = false;

  overflow = false;

  private splitSecondRound = false;

  splitedCards: Card[] = [];

  split = false;

  splitOverflow = false;

  double = false;

  blackjack = false;

  won = false;

  lose = false;

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
    this.isBlackJack();
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

  isBlackJack(): boolean {
    if (this.cards.length !== 2) return false;
    if (
      (this.cards[0].name === 1 && this.cards[1].name > 9) ||
      (this.cards[0].name > 9 && this.cards[1].name === 1)
    ) {
      this.blackjack = true;
      this.getScore();
    }
    return this.blackjack;
  }

  nextRound(cards: Card[]) {
    this.overflow = false;
    this.standed = false;
    this.split = false;
    this.splitSecondRound = false;
    this.splitedCards = [];
    this.cards = [];
    this.splitOverflow = false;
    this.double = false;
    this.blackjack = false;
    this.won = false;
    this.lose = false;
    this.resetHand(cards);
  }

  splitHand(firstMissing: Card, secondMissing: Card) {
    this.split = true;
    this.splitedCards = [this.cards[1], secondMissing];
    this.cards = [this.cards[0], firstMissing];
  }
}
