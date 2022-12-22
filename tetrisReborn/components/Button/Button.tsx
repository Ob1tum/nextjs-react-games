import { FC } from "react";
import classes from './Button.module.scss';

interface IButtonProps {
  text: string;
}

const Button: FC<IButtonProps> = ({ text }) => {

  return (
    <button className={classes.Button}>{text}</button>
  );
}

export default Button;
