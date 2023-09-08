import React from 'react';
import styles from '../../../../styles/MainSection/Content/BottomSection/BottomContent.module.css';
import WindIcon from '../../../icons/weather/WindIcon';
import { AnimatePresence, motion } from 'framer-motion';
import getDay from '../../../../utils/getDay';
import getHour from '../../../../utils/getHour';
import getIcon from '../../../../utils/getIcon';
import { Data } from '../../../../types/Data';

type Props = {
  data: {
    data: Data;
    offset: number;
  };
  type: string;
};

const BottomContent = ({ data: { data, offset }, type }: Props) => {
  const getTimeDetails = (index: number) => {
    const temp = data.hourly[index].temp;
    const pop = data.hourly[index].pop;
    const wind = data.hourly[index].wind_speed;
    const id = data.hourly[index].weather[0].id;
    const dt = data.hourly[index].dt;

    return {
      temp,
      pop,
      wind,
      id,
      dt,
    };
  };

  const renderTimeWrapper = (index: number, delay: number) => {
    const { temp, pop, wind, id, dt } = getTimeDetails(index);

    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            bounce: 0.5,
            duration: 0.5,
            delay,
          },
        }}
        className={styles.TimeWrapper}
      >
        <div className={styles.IconWrapper}>
          {type === 'temperature' && <>{getIcon(id)}</>}
          {type === 'precipitation' && <>{getIcon(id)}</>}
          {type === 'wind' && <WindIcon svgSize={40} parentClass={styles.IconParent} />}
        </div>
        <div className={styles.Details}>
          <div className={styles.Count}>
            {type === 'temperature' && `${Math.round(temp)}°C`}
            {type === 'precipitation' && `${pop > 0 ? Math.round(pop * 100) : 0}%`}
            {type === 'wind' && `${wind > 0 ? Math.round(wind * 3.6) : 0} km/h`}
          </div>
          <div className={styles.Time}>
            <div>{getDay(dt, offset)}</div>
            <div>{getHour(dt, offset)}</div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>
        <div className={styles.Wrapper}>
          {renderTimeWrapper(0, 0)}
          {renderTimeWrapper(8, 0.1)}
          {renderTimeWrapper(16, 0.2)}
          {renderTimeWrapper(24, 0.3)}
        </div>
      </AnimatePresence>
    </>
  );
};

export default BottomContent;
