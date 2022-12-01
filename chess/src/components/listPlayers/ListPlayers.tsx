import Link from 'next/link';
import { useDispatch } from 'react-redux';

import React from 'react';

import { useAppSelector } from '../../../../hooks';
import { setDataForRival } from '../../store/DataSlice';

import styles from './ListPlayers.module.scss';

const ListPlayers = () => {
  const players = useAppSelector((state) => state.rootSlice.listPlayers);
  const current = useAppSelector((state) => state.rootSlice.currentPlayer);
  const dispatch = useDispatch();

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {players.map((item) => (
          <div>
            <li className={styles['list-item']}>
              <h3 className={styles['player-name']}>имя: {item.label.name}</h3>
              <p className={styles['player-name']}>ставка: {item.label.bid}</p>
              <span className={styles['player-color']}>цвет шахмат: {item.label.colors}</span>
            </li>
            <span>
              {current?.colors !== item.label.colors ? (
                <Link href="/chess/game">
                  <button
                    onClick={() => {
                      dispatch(setDataForRival(item));
                    }}
                    className={styles.button}
                    type="submit"
                  >
                    Выбрать соперника
                  </button>
                </Link>
              ) : (
                <span className={styles.colorRevers}>Выбрать нельзя</span>
              )}
            </span>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default ListPlayers;
