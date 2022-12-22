import { FC } from "react";
import classes from './Wrapper.module.scss';

interface IWrapperProps {
  children: JSX.Element
}

const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return <div className={classes.Wrapper}>{children}</div>
}

export default Wrapper;
