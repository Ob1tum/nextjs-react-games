import Link from "next/link";
import { FC } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Game.module.scss";

const Game: FC = () => {
  return (
    <Wrapper>
      <div className={classes.GameContainer}>
        <Link href="./">
          <span><Button text="Back" /></span>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Game;
