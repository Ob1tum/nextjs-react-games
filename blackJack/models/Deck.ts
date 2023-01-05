import { getNumericEnumValues } from "../helpers/EnumHelper";
import { CardName } from "./CardName";
import { CardSuit } from "./CardSuit";
import Card from "./Card";

export default class Deck {
  private pointer = 0;
  private cards: Card[] = [];

  constructor() {
    const suits = getNumericEnumValues(CardSuit);
    const names = getNumericEnumValues(CardName);

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < names.length; j++) {
        this.cards.push(new Card(names[j], suits[i]));
      }
    }

    this.mixCards();
  }

  private mixCards() {
    for (let i = 0; i < this.cards.length; i++) {
      const rnd = Math.floor(Math.random() * 52);
      if (rnd === i) continue;
      else {
        const prev = this.cards[rnd];
        const next = this.cards[i];
        this.cards[rnd] = next;
        this.cards[i] = prev;
      }
    }
  }

  getNextCard(): Card {
    return this.cards[this.pointer++];
  }
  
  getNextHand(): Card[] {
    const hand = [this.cards[this.pointer], this.cards[this.pointer + 1]];
    this.pointer += 2;
    return hand;
  }

}
