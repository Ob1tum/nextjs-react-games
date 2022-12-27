import Link from "next/link";
import { BaseSyntheticEvent, FC, useCallback, useEffect, useRef, useState } from "react";
import FieldModel from "../../models/FieldModel";
import { MoveDirection } from "../../models/figures/MoveDirection";
import { KeyCodes, NativeEvent } from "../../types/NativeEvent";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Game.module.scss";
import GameField from "./GameField/GameField";
import GameOver from "./GameOver/GameOver";
import SideBar from "./SideBar/SideBar";

const Game: FC = () => {
  const [field, setField] = useState(new FieldModel());
  const timer = useRef(null);

  const { gameOver, level, score } = field;
  
  useEffect(() => {
    setField(field.initGame());
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => {
      field.moveCurrentFigure(MoveDirection.BOTTOM);
      setField(field.updateBoard());
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (gameOver) clearInterval(timer.current);
  }, [gameOver]);

  const onKeyDown = useCallback((e: BaseSyntheticEvent) => {
    const { keyCode } = e.nativeEvent as NativeEvent;
    switch (keyCode) {
      case KeyCodes.A:
      case KeyCodes.LEFT_ARROW:
        field.moveCurrentFigure(MoveDirection.LEFT);
        setField(field.updateBoard());
        break;
      case KeyCodes.DOWN_ARROW:
        e.preventDefault(); // prevent page scroll
      case KeyCodes.S:
        field.moveCurrentFigure(MoveDirection.BOTTOM);
        setField(field.updateBoard());
        break;
      case KeyCodes.D:
      case KeyCodes.RIGHT_ARROW:
        field.moveCurrentFigure(MoveDirection.RIGHT)
        setField(field.updateBoard());
        break;
      case KeyCodes.UP_ARROW:
        e.preventDefault(); // prevent page scroll
      case KeyCodes.W:
        console.log('w');
        break;
      default:
        break;
    }
  }, []);

  return (
    <Wrapper onKeyDown={onKeyDown}>
      <div className={classes.GameContainer}>
        <Link href="./">
          <span><Button text="Back" /></span>
        </Link>
        <div className={classes.FieldContainer}>
          <div className={classes.FieldAndSideBar}>
            <GameField field={field} setField={setField} />
            <SideBar nextFigure={field.nextFigure} level={level} points={score} />
          </div>
        </div>
        {gameOver && <GameOver />}
      </div>
    </Wrapper>
  );
}

export default Game;
