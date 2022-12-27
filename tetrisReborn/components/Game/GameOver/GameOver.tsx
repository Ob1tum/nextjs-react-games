import { FC } from "react";
import classes from "./GameOver.module.scss";

const GameOver: FC = () => {
  
  return (
    <div className={classes.GameOver}>
      Game over!
    </div>
  );
}

export default GameOver;

