import React from 'react';
import { withRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import Header from '../header/header';
import SideBar from '../header/sideBar';
import { FooterBar } from '../footer/footer';
import { DivPage, Section } from '../profile/profileStyle';
import tetrisIcon from '../img/tetrisIcon.png';
import chessIcon from '../img/chessIcon.png';
import checkersIcon from '../img/checkersIcon.png';
import hangmanIcon from '../img/hangmanIcon.png';
import aerohokkeyIcon from '../img/aerohokkeyIcon.png';
<<<<<<< HEAD
import blackJackIcon from '../img/blackJackIcon.png';
=======
import solitairIcon from '../img/solitairIcon.png';
>>>>>>> e6089a699dbe55b7ceb7b4ddffd8fb3f01de2892

import { GameLink } from './GameLink';
import { Games, Page, HeaderGames, ListGames } from './listGamesStyle';

const ListGamesForm = () => {
  const path = 'games/';

  const gameLinksArr = [
    { src: tetrisIcon.src, title: 'tetris' },
    { src: chessIcon.src, title: 'chess' },
    { src: checkersIcon.src, title: 'checkersReborn' },
    { src: checkersIcon.src, title: 'checkers' },
    { src: hangmanIcon.src, title: 'hangman' },
    { src: aerohokkeyIcon.src, title: 'airhockey' },
<<<<<<< HEAD
    { src: blackJackIcon.src, title: 'blackJack' },
=======
    { src: tetrisIcon.src, title: 'tetrisReborn' },
    { src: solitairIcon.src, title: 'solitaire' },
>>>>>>> e6089a699dbe55b7ceb7b4ddffd8fb3f01de2892
  ];
  return (
    <>
      <Section>
        <Header />
        <DivPage>
          <SideBar />
          <Page>
            <Games>
              <HeaderGames>GAMES</HeaderGames>
              <ListGames>
<<<<<<< HEAD
                {gameLinksArr.map((item, index) => (
                  <GameLink
                    key={index}
=======
                {gameLinksArr.map((item) => (
                  <GameLink
                    key={uuidv4()}
>>>>>>> e6089a699dbe55b7ceb7b4ddffd8fb3f01de2892
                    src={item.src}
                    title={item.title}
                    href={`${path}${item.title}`}
                  />
                ))}
              </ListGames>
            </Games>
          </Page>
        </DivPage>
      </Section>
      <FooterBar />
    </>
  );
};

export default withRouter(ListGamesForm);
