import { useCallback } from 'react';

import { Board } from '../../components/board/board';
import { useDefaultTargets } from '../../utils/hooks/use-default-targets';
import { useBaseGameLogic } from '../../utils/hooks/use-base-game-logic';
import { useDifficulty } from '../../utils/hooks/use-difficulty';
import { DEFAULT_DIFFICULTY_MODES_INFO } from '../../utils/const/default-difficulty-modes-info';
import { TargetAnimationTypes, TargetHitHandler } from '../../utils/types/target';
import { removeTarget } from '../../reducers/targets-slice';
import {
  addHit,
  addMiss,
  selectAccuracy,
  selectGameSpeed,
  selectScore,
  selectTimeFromStart,
} from '../../reducers/statistics-slice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useTopStatistics } from '../../utils/hooks/use-top-statistics';
import { useGameStatistics } from '../../utils/hooks/use-game-statistics';

import { PrecisionDifficultyForm } from './components/precision-difficulty-form/precision-difficulty-form';
import {
  easyPrecisionDifficulty,
  hardPrecisionDifficulty,
  normalPrecisionDifficulty,
} from './const/precision-difficulty-levels';
import { useLeaderBoard } from '../../utils/hooks/use-leader-board';
import { GameModesPaths } from '../../utils/enums/game-modes-paths';
import { LeaderList } from '../../components/leader-list/leader-list';

export const Precision = () => {
  const dispatch = useAppDispatch();

  const timeFromStart = useAppSelector(selectTimeFromStart);
  const hits = useAppSelector(selectScore);
  const speed = useAppSelector(selectGameSpeed);
  const accuracy = useAppSelector(selectAccuracy);

  const targetCreator = useDefaultTargets({ animationType: TargetAnimationTypes.fadeIn });
  useBaseGameLogic();
  useDifficulty({
    easy: easyPrecisionDifficulty,
    normal: normalPrecisionDifficulty,
    hard: hardPrecisionDifficulty,
  });

  useTopStatistics(
    () => [
      { label: 'Time', value: timeFromStart },
      { label: 'Hits', value: hits },
      { label: 'Speed', value: `${speed.toFixed(2)} t/s` },
    ],
    [timeFromStart, hits, speed],
  );
  useGameStatistics(() => [
    { label: 'Hit Targets', value: hits },
    { label: 'Accuracy', value: accuracy },
    { label: 'Time', value: timeFromStart },
  ]);
  useLeaderBoard(
    () => [
      { label: 'Accuracy', value: accuracy },
      { label: 'Hits', value: hits },
    ],
    GameModesPaths.Precision,
    (a, b) => {
      const aValue = parseFloat(`${a.statItems[0].value}`);
      const bValue = parseFloat(`${b.statItems[0].value}`);

      if (aValue === bValue) {
        return aValue + Number(b.statItems[0].value) - Number(a.statItems[0].value);
      }

      return bValue - aValue;
    },
  );

  const hitHandler = useCallback<TargetHitHandler>(
    (id) => {
      dispatch(removeTarget(id));
      targetCreator();
      dispatch(addHit());
    },
    [targetCreator],
  );

  const missHandler = useCallback(() => dispatch(addMiss()), []);

  return (
    <>
      <PrecisionDifficultyForm />
      <Board
        targetCreator={targetCreator}
        hitHandler={hitHandler}
        difficultyModes={DEFAULT_DIFFICULTY_MODES_INFO}
        missHandler={missHandler}
      />
      <LeaderList mode={GameModesPaths.Precision} />
    </>
  );
};
