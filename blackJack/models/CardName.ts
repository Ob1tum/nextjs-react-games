export enum CardName {
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ACE = 11,
  JACK = 12,
  QUEEN = 13,
  KING = 14,
}

export const getCardScore = (card: CardName): number => {
  let score = 0;
  switch (card) {
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
  return score;
}
