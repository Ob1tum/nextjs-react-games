import { FC } from 'react';

import HomeButton from '../ui/HomeButton/HomeButton';

import { Home, ButtonWrapper } from './index';

const HomeComponent: FC = () => (
  <Home>
    <ButtonWrapper>
      <HomeButton name="Старт" link="./blackJack/game" />
      <HomeButton name="Правила" link="./blackJack/rules" />
    </ButtonWrapper>
  </Home>
);

export default HomeComponent;
