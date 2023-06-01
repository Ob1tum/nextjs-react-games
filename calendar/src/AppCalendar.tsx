import React from 'react';

import { Calendar } from './components';
import { formatDate } from './utils/helpers/date';


import styles from './static/css/global.module.scss';

export const AppCalendar: React.FC = () => {
  const [selectedDate, setSelectedDay] = React.useState(new Date());

  return (
    <div className={styles.app__container}>
      <div className={styles.date__container}>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>

      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </div>
  );
};

export default AppCalendar;
