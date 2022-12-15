import TetrisPlay from '../../../../tetris2/components/tetris-play/TetrisPlay';
import style from '../../../../tetris2/styles/index.module.scss';

function TetrisGame() {
  return (
    <div className={style.game_wrapper}>
      <TetrisPlay />
    </div>
  );
}

export default TetrisGame;
