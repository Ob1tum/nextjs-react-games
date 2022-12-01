import { useDispatch, useSelector } from 'react-redux';
import React, { FC } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import { setPlayWithBoot, setUserSelectedId } from '../../store/checkersReducer';
import { RootState } from '../../../store';

import { players } from './PlayersForOnlinePlay';

interface PlayConditional {
  colorCheckers: string;

  bid: number;
}
export interface UserProps {
  id: number;
  name?: string;
  playConditional: PlayConditional;
}

const Lobbi: FC<UserProps> = (props) => {
  const dispatch = useDispatch();
  const route = useRouter();
  const { color, bid, isCreatedPlay } = useSelector((state: RootState) => state.checkers);

  const colorSelectedUser = players.find((el) => el.id === props.id).playConditional.colorCheckers;
  const bidSelectedUser = players.find((el) => el.id === props.id).playConditional.bid;
  const disable = color !== colorSelectedUser && bidSelectedUser >= bid;

  return (
    <li className="lobbi-span">
      {props.name} {props.playConditional?.bid} {props.playConditional?.colorCheckers}{' '}
      {dispatch(setPlayWithBoot(false)) && (
        <button
          type="button"
          className="lobbi-btn"
          onClick={() => {
            dispatch(setUserSelectedId(props.id));
            if (localStorage === window.localStorage) {
              localStorage.setItem('id', JSON.stringify(props.id));
            }
            return isCreatedPlay && disable && route.push('../../../checkers/Play');
          }}
        >
          {disable ? 'Присоединиться' : 'Не возможно'}
        </button>
      )}
    </li>
  );
};
export default Lobbi;
