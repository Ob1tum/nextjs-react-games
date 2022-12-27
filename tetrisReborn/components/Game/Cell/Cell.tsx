import { FC } from "react";
import createClasses from "../../../../checkersReborn/helpers/ClassHelper";
import classes from "./Cell.module.scss";

interface ICellProps {
  hasFigure: boolean;
  filled: boolean;
}

const Cell: FC<ICellProps> = ({ hasFigure, filled }) => {
  const cellClasses = createClasses([
    [classes.Cell, true],
    [classes.HasFigure, hasFigure || filled],
  ]);

  return (
    <div className={cellClasses}>

    </div>
  );
}

export default Cell;
