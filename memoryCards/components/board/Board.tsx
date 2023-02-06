import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/Card';
import { getRandomPhotos } from '../../unsplashServiсe';
import { RootState } from '../../../store';
import styles from '../../styles/index.module.scss';

const Board = () => {
  const [photos, setPhotos] = useState([]);
  const [openCards, setOpenCards] = useState(new Map());
  const [guesses, setGuesses] = useState(0);
  const [matches, setMatches] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const { theme } = useSelector((store: RootState) => store.memoryCards);

  const saveJumbledPhotos = () => {
    getRandomPhotos(theme, 6).then((res) => {
      setPhotos(() => [...res, ...res].sort(() => Math.random() - 0.5));
    });
  };

  const matchCheck = () => {
    if (openCards.size % 2 === 0) {
      const cardIds = Array.from(openCards.values());
      for (const [key, value] of Array.from(openCards.entries())) {
        if (cardIds.reduce((acc, val) => (val === value ? ++acc : acc), 0) < 2) {
          setOpenCards((prevOpenCards) => {
            prevOpenCards.delete(key);
            return prevOpenCards;
          });
        }
      }
      setMatches(openCards.size / 2);
      setPercentage(guesses !== 0 ? Math.round((matches * 100) / guesses) : 0);
    }
  };

  useEffect(() => {
    saveJumbledPhotos();
  }, []);

  useEffect(() => {
    matchCheck();
  }, [openCards, guesses]);

  const cardClickHandler = (id: string, index: number) => {
    setOpenCards((prevOpenCards) => prevOpenCards.set(index, id));
    if (matches < 6) setGuesses((state) => state + 1);
  };

  const reset = () => {
    saveJumbledPhotos();
    setOpenCards(new Map());
    setGuesses(0);
    setMatches(0);
    setPercentage(0);
  };

  return (
    <>
      <div className={styles.board}>
        {photos.map((photo, i) => (
          <Card
            cardClickHandler={cardClickHandler}
            photo={photo}
            key={i}
            index={i}
            isActive={openCards.has(i)}
          />
        ))}
        <p>Guesses: {guesses}</p>
        <p>Matches: {matches}</p>
        <p>Percent: {percentage}%</p>
        <p>Open cards!</p>
      </div>
      <button className={styles.button} type="button" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default Board;
