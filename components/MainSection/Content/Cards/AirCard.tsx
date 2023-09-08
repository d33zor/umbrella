import React from 'react';
import styles from '../../../../styles/MainSection/Content/Cards/AirCard.module.css';
import AirIcon from '../../../icons/other/AirIcon';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  data: {
    pollutant: string;
    aqi: number;
    wind: string;
  };
};

const AirCard = ({ data: { pollutant, aqi, wind } }: Props) => {
  function calculateAQI(count: number): string {
    return Math.round(count) <= 2
      ? 'Low'
      : Math.round(count) <= 3
      ? 'Moderate'
      : Math.round(count) <= 4
      ? 'High'
      : 'Very High';
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              bounce: 0.5,
              duration: 0.5,
              delay: 0.1,
            },
          }}
          className={styles.Wrapper}
        >
          <div className={styles.Header}>
            <AirIcon svgClass={styles.Icon} parentClass={styles.IconParent} />
            <div className={styles.HeaderWrapper}>
              <div className={styles.HeaderTitle}>Air Quality</div>
              <div className={styles.HeaderDescription}>Main pollutant: {pollutant}</div>
            </div>
          </div>
          <div className={styles.AqiWindWrapper}>
            <div className={styles.AqiWrapper}>
              <div className={styles.AqiCount}>{aqi}</div>
              <motion.div
                className={styles.Aqi}
                initial={{ background: 'var(--green-color)' }}
                animate={{
                  background:
                    calculateAQI(aqi) === 'Low'
                      ? 'var(--green-color)'
                      : calculateAQI(aqi) === 'Moderate'
                      ? 'var(--yellow-color)'
                      : calculateAQI(aqi) === 'High'
                      ? 'var(--light-orange-color)'
                      : 'var(--red-color)',
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                }}
              >
                AQI
              </motion.div>
            </div>
            <div className={styles.Wind}>{wind} Wind</div>
          </div>
          <div className={styles.AirQuality}>
            <div className={styles.AirQualityDescription}>
              <div>Good</div>
              <div>Hazardous</div>
            </div>
            <div className={styles.AirQualityIndicatorWrapper}>
              <motion.div
                className={styles.AirQualityIndicator}
                initial={{ width: 0 }}
                animate={{
                  width: `${aqi * 20}%`,
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.5,
                    delay: 0.5,
                  },
                }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AirCard;
