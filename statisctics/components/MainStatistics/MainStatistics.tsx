import React from 'react';
import classes from "./MainStatistics.module.scss";
import icon1 from "../../img/Icon1.png";
import icon2 from "../../img/Icon2.png";
import icon3 from "../../img/Icon3.png";
import icon4 from "../../img/Icon4.png";

const Stats = () => {
  return (
    <div className={classes.stats}>
      <div className={classes.today}>
        <div className={classes.list}>
          <li className={classes.red}>
            <img src={icon1.src} alt="icon"/>
            <h3 className={classes.count}>$1k</h3>
            <p className={classes.title}>Total Profit</p>
            <p className={classes.diff}>+8% from yesterday</p>
          </li>
          <li className={classes.orange}>
            <img src={icon2.src} alt="icon"/>
            <h3 className={classes.count}>300k</h3>
            <p className={classes.title}>Total Visits</p>
            <p className={classes.diff}>+20% from yesterday</p>
          </li>
          <li className={classes.green}>
            <img src={icon3.src} alt="icon"/>
            <h3 className={classes.count}>150</h3>
            <p className={classes.title}>Games</p>
            <p className={classes.diff}>+1 from yesterday</p>
          </li>
          <li className={classes.purple}>
            <img src={icon4.src} alt="icon"/>
            <h3 className={classes.count}>10k</h3>
            <p className={classes.title}>New Users</p>
            <p className={classes.diff}>+10% from yesterday</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Stats;