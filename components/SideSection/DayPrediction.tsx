import React from 'react';
import styles from '../../styles/SideSection/DayPrediction.module.css';
import CloudIcon from '../icons/weather/CloudIcon';
import RainIcon from '../icons/weather/RainIcon';
import SunIcon from '../icons/weather/SunIcon';
import SnowIcon from '../icons/weather/SnowIcon';
import ThunderIcon from '../icons/weather/ThunderIcon';
import FogIcon from '../icons/weather/FogIcon';
import SunAndCloudIcon from '../icons/weather/SunAndCloudIcon';

type Props = {
  data: any;
};

const DayPrediction = ({
  data: {
    date,
    condition: { id, main },
    day,
    night,
  },
}: Props) => {
  function getTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <div className={styles.Wrapper}>
      {id >= 802 && id <= 804 ? (
        <CloudIcon svgSize={40} />
      ) : id === 800 ? (
        <SunIcon svgSize={40} />
      ) : id >= 300 && id <= 531 ? (
        <RainIcon svgSize={40} />
      ) : id >= 600 && id <= 622 ? (
        <SnowIcon svgSize={40} />
      ) : id >= 200 && id <= 232 ? (
        <ThunderIcon svgSize={40} />
      ) : id === 801 ? (
        <SunAndCloudIcon svgSize={40} />
      ) : (
        <FogIcon svgSize={40} />
      )}
      <div className={styles.Description}>
        <div className={styles.Date}>{getTime(date)}</div>
        <div className={styles.Bottom}>
          <div className={styles.Weather}>{main}</div>
          <div className={styles.Temperature}>
            {Math.round(day)}° / {Math.round(night)}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPrediction;
