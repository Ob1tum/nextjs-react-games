import Card from "./Card";
import { CardName } from "./CardName";

export default class Player {
  balance: number = 1000;
  cards: Card[] = [];

  constructor(hand: Card[]) {
    this.cards.push(...hand);
  }

  getScore(): number {
    let score = 0;
    for (let i = 0; i < this.cards.length; i++) {
      switch (this.cards[i].name) {
        case CardName.ACE:
          score += score + 11 > 21 ? 1 : 11;
          break;
        case CardName.TWO:
          score += 2;
          break;
        case CardName.THREE:
          score += 3;
          break;
        case CardName.FOUR:
          score += 4;
          break;
        case CardName.FIVE:
          score += 5;
          break;
        case CardName.SIX:
          score += 6;
          break;
        case CardName.SEVEN:
          score += 7;
          break;
        case CardName.EIGHT:
          score += 8;
          break;
        case CardName.NINE:
          score += 9;
          break;
        case CardName.TEN:
        case CardName.JACK:
        case CardName.QUEEN:
        case CardName.KING:
          score += 10;
          break;
      }
    }

    return score;
  }

  takeCard(card: Card) {
    this.cards.push(card);
  }
}
