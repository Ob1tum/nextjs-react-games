import cardback from '../assets/images/cardback/cardback.jpeg';
import clubs1 from '../assets/images/cards/clubs/ace.png';
import clubs2 from '../assets/images/cards/clubs/2.png';
import clubs3 from '../assets/images/cards/clubs/3.png';
import clubs4 from '../assets/images/cards/clubs/4.png';
import clubs5 from '../assets/images/cards/clubs/5.png';
import clubs6 from '../assets/images/cards/clubs/6.png';
import clubs7 from '../assets/images/cards/clubs/7.png';
import clubs8 from '../assets/images/cards/clubs/8.png';
import clubs9 from '../assets/images/cards/clubs/9.png';
import clubs10 from '../assets/images/cards/clubs/10.png';
import clubs11 from '../assets/images/cards/clubs/v.png';
import clubs12 from '../assets/images/cards/clubs/q.png';
import clubs13 from '../assets/images/cards/clubs/k.png';
import diamonds1 from '../assets/images/cards/diamonds/ace.png';
import diamonds2 from '../assets/images/cards/diamonds/2.png';
import diamonds3 from '../assets/images/cards/diamonds/3.png';
import diamonds4 from '../assets/images/cards/diamonds/4.png';
import diamonds5 from '../assets/images/cards/diamonds/5.png';
import diamonds6 from '../assets/images/cards/diamonds/6.png';
import diamonds7 from '../assets/images/cards/diamonds/7.png';
import diamonds8 from '../assets/images/cards/diamonds/8.png';
import diamonds9 from '../assets/images/cards/diamonds/9.png';
import diamonds10 from '../assets/images/cards/diamonds/10.png';
import diamonds11 from '../assets/images/cards/diamonds/v.png';
import diamonds12 from '../assets/images/cards/diamonds/q.png';
import diamonds13 from '../assets/images/cards/diamonds/k.png';
import hearts1 from '../assets/images/cards/hearts/ace.png';
import hearts2 from '../assets/images/cards/hearts/2.png';
import hearts3 from '../assets/images/cards/hearts/3.png';
import hearts4 from '../assets/images/cards/hearts/4.png';
import hearts5 from '../assets/images/cards/hearts/5.png';
import hearts6 from '../assets/images/cards/hearts/6.png';
import hearts7 from '../assets/images/cards/hearts/7.png';
import hearts8 from '../assets/images/cards/hearts/8.png';
import hearts9 from '../assets/images/cards/hearts/9.png';
import hearts10 from '../assets/images/cards/hearts/10.png';
import hearts11 from '../assets/images/cards/hearts/v.png';
import hearts12 from '../assets/images/cards/hearts/q.png';
import hearts13 from '../assets/images/cards/hearts/k.png';
import spades1 from '../assets/images/cards/spades/ace.png';
import spades2 from '../assets/images/cards/spades/2.png';
import spades3 from '../assets/images/cards/spades/3.png';
import spades4 from '../assets/images/cards/spades/4.png';
import spades5 from '../assets/images/cards/spades/5.png';
import spades6 from '../assets/images/cards/spades/6.png';
import spades7 from '../assets/images/cards/spades/7.png';
import spades8 from '../assets/images/cards/spades/8.png';
import spades9 from '../assets/images/cards/spades/9.png';
import spades10 from '../assets/images/cards/spades/10.png';
import spades11 from '../assets/images/cards/spades/v.png';
import spades12 from '../assets/images/cards/spades/q.png';
import spades13 from '../assets/images/cards/spades/k.png';

type CurrCard = {
  id: number;
  nameCard: number;
  suit: string;
  img: string;
};

export const cardDB: CurrCard[] = [
  { id: 1, nameCard: 1, suit: 'clubs', img: clubs1.src },
  { id: 2, nameCard: 2, suit: 'clubs', img: clubs2.src },
  { id: 3, nameCard: 3, suit: 'clubs', img: clubs3.src },
  { id: 4, nameCard: 4, suit: 'clubs', img: clubs4.src },
  { id: 5, nameCard: 5, suit: 'clubs', img: clubs5.src },
  { id: 6, nameCard: 6, suit: 'clubs', img: clubs6.src },
  { id: 7, nameCard: 7, suit: 'clubs', img: clubs7.src },
  { id: 8, nameCard: 8, suit: 'clubs', img: clubs8.src },
  { id: 9, nameCard: 9, suit: 'clubs', img: clubs9.src },
  { id: 10, nameCard: 10, suit: 'clubs', img: clubs10.src },
  { id: 11, nameCard: 11, suit: 'clubs', img: clubs11.src },
  { id: 12, nameCard: 12, suit: 'clubs', img: clubs12.src },
  { id: 13, nameCard: 13, suit: 'clubs', img: clubs13.src },
  { id: 14, nameCard: 1, suit: 'diamonds', img: diamonds1.src },
  { id: 15, nameCard: 2, suit: 'diamonds', img: diamonds2.src },
  { id: 16, nameCard: 3, suit: 'diamonds', img: diamonds3.src },
  { id: 17, nameCard: 4, suit: 'diamonds', img: diamonds4.src },
  { id: 18, nameCard: 5, suit: 'diamonds', img: diamonds5.src },
  { id: 19, nameCard: 6, suit: 'diamonds', img: diamonds6.src },
  { id: 20, nameCard: 7, suit: 'diamonds', img: diamonds7.src },
  { id: 21, nameCard: 8, suit: 'diamonds', img: diamonds8.src },
  { id: 22, nameCard: 9, suit: 'diamonds', img: diamonds9.src },
  { id: 23, nameCard: 10, suit: 'diamonds', img: diamonds10.src },
  { id: 24, nameCard: 11, suit: 'diamonds', img: diamonds11.src },
  { id: 25, nameCard: 12, suit: 'diamonds', img: diamonds12.src },
  { id: 26, nameCard: 13, suit: 'diamonds', img: diamonds13.src },
  { id: 27, nameCard: 1, suit: 'hearts', img: hearts1.src },
  { id: 28, nameCard: 2, suit: 'hearts', img: hearts2.src },
  { id: 29, nameCard: 3, suit: 'hearts', img: hearts3.src },
  { id: 30, nameCard: 4, suit: 'hearts', img: hearts4.src },
  { id: 31, nameCard: 5, suit: 'hearts', img: hearts5.src },
  { id: 32, nameCard: 6, suit: 'hearts', img: hearts6.src },
  { id: 33, nameCard: 7, suit: 'hearts', img: hearts7.src },
  { id: 34, nameCard: 8, suit: 'hearts', img: hearts8.src },
  { id: 35, nameCard: 9, suit: 'hearts', img: hearts9.src },
  { id: 36, nameCard: 10, suit: 'hearts', img: hearts10.src },
  { id: 37, nameCard: 11, suit: 'hearts', img: hearts11.src },
  { id: 38, nameCard: 12, suit: 'hearts', img: hearts12.src },
  { id: 39, nameCard: 13, suit: 'hearts', img: hearts13.src },
  { id: 40, nameCard: 1, suit: 'spades', img: spades1.src },
  { id: 41, nameCard: 2, suit: 'spades', img: spades2.src },
  { id: 42, nameCard: 3, suit: 'spades', img: spades3.src },
  { id: 43, nameCard: 4, suit: 'spades', img: spades4.src },
  { id: 44, nameCard: 5, suit: 'spades', img: spades5.src },
  { id: 45, nameCard: 6, suit: 'spades', img: spades6.src },
  { id: 46, nameCard: 7, suit: 'spades', img: spades7.src },
  { id: 47, nameCard: 8, suit: 'spades', img: spades8.src },
  { id: 48, nameCard: 9, suit: 'spades', img: spades9.src },
  { id: 49, nameCard: 10, suit: 'spades', img: spades10.src },
  { id: 50, nameCard: 11, suit: 'spades', img: spades11.src },
  { id: 51, nameCard: 12, suit: 'spades', img: spades12.src },
  { id: 52, nameCard: 13, suit: 'spades', img: spades13.src },
  { id: 53, nameCard: 0, suit: 'cardback', img: cardback.src },
];

export const indicateCardPic = (name: number, suit: string) => {
  const currCard: CurrCard = cardDB.filter((el) => el.nameCard === name && el.suit === suit)[0];
  return currCard.img;
};
