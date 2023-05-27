import React from "react";
import classes from './Statistics.module.scss'
import Stats from "../MainStatistics/MainStatistics";
import Charts from "../Charts/Charts";
const Statistics = () => {
  return (
    <div className={classes.Statistics}>
      <Stats/>
      <Charts/>
    </div>
  );
};

export default Statistics;