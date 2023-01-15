import { CardName } from './CardName';
import { CardSuit } from './CardSuit';

export default class Card {
  name: CardName | number;

  suit: CardSuit | string;

  constructor(name: CardName, suit: CardSuit) {
    this.name = name;
    this.suit = suit;
  }
}
