import Image from 'next/image';
import Select from 'react-select';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { FC, useState } from 'react';

import { Settings, StyledPopupButton } from '../../styles/chess.style';
import headerLogo from '../../assets/img/header-logo.png';
import { GameSettingsProps } from '../../interfaces/Interfaces';
import { setDataForCurrentPlayer, closeModal, setOnline } from '../../store/DataSlice';
import { useAppSelector } from '../../../../hooks';

import styles from './gameSettings.module.scss';
import { color, gameMode, timeGain, timeGame } from './PlayersData';

const GameSettings: FC<GameSettingsProps> = ({ setGainTime, settingsGame }) => {
  // const changeColors = () => Math.floor(Math.random() * 2);

  const bids = useAppSelector((state) => state.rootSlice.bidsData);
  const [confirm, setConfirm] = useState(false);
  const [inputData, setInputData] = useState({
    colors: 'random',
    mode: 'с ботом',
    time: 'неограниченно',
    bids: 'нет ставки',
    gain: 'без прибавки',
  });
  const dispatch = useDispatch();
  console.log(setGainTime, settingsGame);
  // const setTimeGame = (option: SelectOption | null) => {
  //   const time = Number(option.value);
  //   let newTime;
  //   if (time < 10 && time !== null) {
  //     newTime = `0${time} : 00`;
  //   } else {
  //     newTime = `${time} : 00`;
  //   }
  //   setGameTime(newTime);
  // };
  console.log(inputData);
  const isOnline =
    inputData.mode === 'онлайн' ? (
      <div>
        <label className={styles['settings__form-title']}>Ставка</label>
        <Select
          className={styles.bid}
          onChange={(event) => setInputData({ ...inputData, bids: event!.label })}
          options={bids}
          defaultValue={bids[0]}
        />
      </div>
    ) : null;

  const isConfirmed =
    confirm && inputData.mode === 'с ботом' ? (
      <span className={styles.link}>
        <Link href="/chess/game">Играть</Link>
      </span>
    ) : null;

  const isCloseModal =
    confirm && inputData.mode === 'онлайн' ? (
      <span>
        <button className={styles.link} type="submit" onClick={() => dispatch(closeModal())}>
          Выбрать соперника
        </button>
      </span>
    ) : null;

  return (
    <Settings
      className={styles.wrapper}
      trigger={
        <StyledPopupButton>
          <span className={styles.title}>Создать игру</span>
        </StyledPopupButton>
      }
      modal
      closeOnDocumentClick
    >
      <div className={styles.settings__logo}>
        <Image
          className={styles['settings__logo-img']}
          src={headerLogo}
          alt="logo"
          width="100"
          height="100"
        />
      </div>
      <h2 className={styles.setting__header}>Выберите настройки</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(setDataForCurrentPlayer(inputData));
          // const chooseColor =
          //   inputData.color === 'random' ? color.slice(1)[changeColors()].value : inputData.color;
          // localStorage.setItem(
          //   'gameSettings',
          //   JSON.stringify({ ...inputData, color: chooseColor }),
          // );
          setConfirm(true);
        }}
        action=""
        className={styles.settings__form}
      >
        <div className={styles.settings__inner}>
          <div className={styles.settings__item}>
            <label className={styles['settings__form-title']}>Цвет</label>
            <Select
              className={styles.colors}
              onChange={(event) => {
                setInputData({ ...inputData, colors: event!.label });
                setConfirm(false);
              }}
              options={color}
              defaultValue={color[0]}
            />
          </div>
          <div className={styles.settings__item}>
            <label className={styles['settings__form-title']}>Режим игры</label>
            <Select
              className={styles.mode}
              onChange={(event) => {
                setInputData({ ...inputData, mode: event!.label });
                setConfirm(false);
              }}
              options={gameMode}
              defaultValue={gameMode[0]}
            />
          </div>
          <div className={styles.settings__item}>
            <label className={styles['settings__form-title']}>Время на игру</label>
            <Select
              className={styles.time}
              onChange={(event) => {
                // setTimeGame(event);
                setInputData({ ...inputData, time: event!.value });
                setConfirm(false);
              }}
              options={timeGame}
              defaultValue={timeGame[0]}
            />
          </div>
          <div className={styles.settings__item}>
            <label className={styles['settings__form-title']}>Прибавка на ход</label>
            <Select
              className={styles.gain}
              onChange={(event) => {
                setInputData({ ...inputData, gain: event!.value });
                setConfirm(false);
              }}
              options={timeGain}
              defaultValue={timeGain[0]}
            />
          </div>
        </div>
        {isOnline}

        <button
          onClick={() => {
            dispatch(setOnline());
          }}
          className={styles.settings__btn}
          type="submit"
        >
          Подвердить
        </button>
        {isConfirmed}
        {isCloseModal}
      </form>
    </Settings>
  );
};

export default GameSettings;
