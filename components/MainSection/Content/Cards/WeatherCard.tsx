import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/MainSection/Content/Cards/WeatherCard.module.css';
import WeatherIcon from '../../../icons/other/WeatherIcon';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  data: {
    sun?: string;
    temp?: number;
    nightTemp?: number;
    pressure?: number;
    visibility?: number;
    humidity?: number;
  };
};

const WeatherCard = ({ data: { temp, nightTemp, sun, pressure, visibility, humidity } }: Props) => {
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
            },
          }}
          className={styles.Wrapper}
        >
          <div className={styles.Header}>
            <WeatherIcon svgClass={styles.Icon} parentClass={styles.IconParent} />
            <div className={styles.HeaderWrapper}>
              <div className={styles.HeaderTitle}>Weather</div>
              <div className={styles.HeaderDescription}>What&apos;s the weather.</div>
            </div>
          </div>
          <div className={styles.TempWrapper}>
            <div className={styles.TemperatureWrapper}>
              <div className={styles.Temperature}>{temp && Math.round(temp)}°C</div>
              <div className={styles.TemperatureNight}>{nightTemp && Math.round(nightTemp)}°C</div>
            </div>
            <div className={styles.Cloudiness}>{sun}</div>
          </div>
          <div className={styles.AirStats}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              className={`${styles.AirStat} ${styles.Pressure}`}
            >
              <div className={styles.AirStatTitle}>Pressure</div>
              <div className={styles.AirStatContent}>{pressure} hPa</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              className={`${styles.AirStat} ${styles.Visibility}`}
            >
              <div className={styles.AirStatTitle}>Visibility</div>
              <div className={styles.AirStatContent}>
                {visibility && (Math.round(visibility) / 1000).toFixed(1)} km
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.4,
                },
              }}
              className={`${styles.AirStat} ${styles.Humidity}`}
            >
              <div className={styles.AirStatTitle}>Humidity</div>
              <div className={styles.AirStatContent}>{humidity}%</div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default WeatherCard;
