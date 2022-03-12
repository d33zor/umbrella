import React from 'react';
import styles from '../../styles/SideSection/WeatherPrediction.module.css';
import DayPrediction from './DayPrediction';

type Props = {
  expanded: boolean;
  data: {
    first: object;
    second: object;
    third: object;
    fourth: object;
    fifth: object;
  };
};

const WeatherPrediction = ({ expanded, data }: Props) => {
  return (
    <div className={`${styles.Wrapper} ${expanded && styles.Expanded}`}>
      <div className={styles.Title}>Weather Prediction</div>
      <div className={styles.Container}>
        {data && (
          <>
            <DayPrediction data={data.first} />
            <DayPrediction data={data.second} />
            <DayPrediction data={data.third} />
            <DayPrediction data={data.fourth} />
            <DayPrediction data={data.fifth} />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherPrediction;
