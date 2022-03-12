import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../../../../styles/MainSection/Content/BottomSection/BottomContent.module.css';
import SunIcon from '../../../icons/weather/SunIcon';
import CloudIcon from '../../../icons/weather/CloudIcon';
import SunAndCloudIcon from '../../../icons/weather/SunAndCloudIcon';
import RainIcon from '../../../icons/weather/RainIcon';
import SnowIcon from '../../../icons/weather/SnowIcon';
import FogIcon from '../../../icons/weather/FogIcon';
import ThunderIcon from '../../../icons/weather/ThunderIcon';
import LoadingTemplate from '../../../LoadingTemplate';
import WindIcon from '../../../icons/weather/WindIcon';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  type: string;
  tempToday?: { [key: string]: { [key: string]: number } };
  popToday?: { [key: string]: { [key: string]: number } };
  windToday?: { [key: string]: number };
  loading?: boolean;
  offset?: number;
  dt?: { [key: string]: number };
};

const BottomContent = ({
  type,
  tempToday,
  popToday,
  windToday,
  loading,
  offset,
  dt,
}: Props) => {
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = (): void => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  function getDay(timestamp: number): string {
    return new Date(
      (timestamp + (offset || 0) + new Date().getTimezoneOffset() * 60) * 1000
    ).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    });
  }

  function getHour(timestamp: number): string {
    return new Date(
      (timestamp + (offset || 0) + new Date().getTimezoneOffset() * 60) * 1000
    ).toLocaleString('pl', {
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  function getIcon(id: number): ReactNode {
    return id && id >= 802 && id <= 804 ? (
      <CloudIcon svgSize={40} parentClass={styles.IconParent} />
    ) : id && id === 800 ? (
      <SunIcon svgSize={40} parentClass={styles.IconParent} />
    ) : id && id >= 300 && id <= 531 ? (
      <RainIcon svgSize={40} parentClass={styles.IconParent} />
    ) : id && id >= 600 && id <= 622 ? (
      <SnowIcon svgSize={40} parentClass={styles.IconParent} />
    ) : id && id >= 200 && id <= 232 ? (
      <ThunderIcon svgSize={40} parentClass={styles.IconParent} />
    ) : id && id === 801 ? (
      <SunAndCloudIcon svgSize={40} parentClass={styles.IconParent} />
    ) : (
      <FogIcon svgSize={40} parentClass={styles.IconParent} />
    );
  }

  return (
    <>
      <AnimatePresence>
        {!loading ? (
          <div className={styles.Wrapper}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: 'spring', bounce: 0.5, duration: 0.5 },
              }}
              className={styles.TimeWrapper}
            >
              <div className={styles.IconWrapper}>
                {type === 'temperature' && !loading && (
                  <>{tempToday && getIcon(tempToday.now.id)}</>
                )}
                {type === 'precipitation' && !loading && (
                  <>{popToday && getIcon(popToday.now.id)}</>
                )}
                {type === 'wind' && !loading && (
                  <WindIcon svgSize={40} parentClass={styles.IconParent} />
                )}
              </div>
              <div className={styles.Details}>
                <div className={styles.Count}>
                  {type === 'temperature' &&
                    !loading &&
                    tempToday &&
                    `${Math.round(tempToday.now.temp)}°C`}
                  {type === 'precipitation' &&
                    !loading &&
                    popToday &&
                    `${
                      popToday.now.pop > 0
                        ? Math.round(popToday.now.pop * 100)
                        : 0
                    }%`}
                  {type === 'wind' &&
                    !loading &&
                    windToday &&
                    `${
                      windToday.now > 0 ? Math.round(windToday.now * 3.6) : 0
                    } km/h`}
                </div>
                {!loading && <div className={styles.Time}>Now</div>}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.1,
                },
              }}
              className={styles.TimeWrapper}
            >
              <div className={styles.IconWrapper}>
                {type === 'temperature' && !loading && (
                  <>{tempToday && getIcon(tempToday.eight.id)}</>
                )}
                {type === 'precipitation' && !loading && (
                  <>{popToday && getIcon(popToday.eight.id)}</>
                )}
                {type === 'wind' && !loading && (
                  <WindIcon svgSize={40} parentClass={styles.IconParent} />
                )}
              </div>
              <div className={styles.Details}>
                <div className={styles.Count}>
                  {type === 'temperature' &&
                    !loading &&
                    tempToday &&
                    `${Math.round(tempToday.eight.temp)}°C`}
                  {type === 'precipitation' &&
                    !loading &&
                    popToday &&
                    `${
                      popToday.eight.pop > 0
                        ? Math.round(popToday.eight.pop * 100)
                        : 0
                    }%`}
                  {type === 'wind' &&
                    !loading &&
                    windToday &&
                    `${
                      windToday.eight > 0
                        ? Math.round(windToday.eight * 3.6)
                        : 0
                    } km/h`}
                </div>
                <div className={styles.Time}>
                  {!loading && (
                    <>
                      <div>{dt && getDay(dt.eight)}</div>
                      <div>{dt && getHour(dt.eight)}</div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              className={styles.TimeWrapper}
            >
              <div className={styles.IconWrapper}>
                {type === 'temperature' && !loading && (
                  <>{tempToday && getIcon(tempToday.sixteen.id)}</>
                )}
                {type === 'precipitation' && !loading && (
                  <>{popToday && getIcon(popToday.sixteen.id)}</>
                )}
                {type === 'wind' && !loading && (
                  <WindIcon svgSize={40} parentClass={styles.IconParent} />
                )}
              </div>
              <div className={styles.Details}>
                <div className={styles.Count}>
                  {type === 'temperature' &&
                    !loading &&
                    tempToday &&
                    `${Math.round(tempToday.sixteen.temp)}°C`}
                  {type === 'precipitation' &&
                    !loading &&
                    popToday &&
                    `${
                      popToday.sixteen.pop > 0
                        ? Math.round(popToday.sixteen.pop * 100)
                        : 0
                    }%`}
                  {type === 'wind' &&
                    !loading &&
                    windToday &&
                    `${
                      windToday.sixteen > 0
                        ? Math.round(windToday.sixteen * 3.6)
                        : 0
                    } km/h`}
                </div>
                <div className={styles.Time}>
                  {!loading && (
                    <>
                      <div>{dt && getDay(dt.sixteen)}</div>
                      <div>{dt && getHour(dt.sixteen)}</div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              className={styles.TimeWrapper}
            >
              <div className={styles.IconWrapper}>
                {type === 'temperature' && !loading && (
                  <>{tempToday && getIcon(tempToday.twentyfour.id)}</>
                )}
                {type === 'precipitation' && !loading && (
                  <>{popToday && getIcon(popToday.twentyfour.id)}</>
                )}
                {type === 'wind' && !loading && (
                  <WindIcon svgSize={40} parentClass={styles.IconParent} />
                )}
              </div>
              <div className={styles.Details}>
                <div className={styles.Count}>
                  {type === 'temperature' &&
                    !loading &&
                    tempToday &&
                    `${Math.round(tempToday.twentyfour.temp)}°C`}
                  {type === 'precipitation' &&
                    !loading &&
                    popToday &&
                    `${
                      popToday.twentyfour.pop > 0
                        ? Math.round(popToday.twentyfour.pop * 100)
                        : 0
                    }%`}
                  {type === 'wind' &&
                    !loading &&
                    windToday &&
                    `${
                      windToday.twentyfour > 0
                        ? Math.round(windToday.twentyfour * 3.6)
                        : 0
                    } km/h`}
                </div>
                <div className={styles.Time}>
                  {!loading && (
                    <>
                      <div>{dt && getDay(dt.twentyfour)}</div>
                      <div>{dt && getHour(dt.twentyfour)}</div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <LoadingTemplate
            style={{
              width: '100%',
              height: `${windowSize && windowSize > 1366 ? '100%' : '279px'}`,
              background: 'rgba(200, 200, 200, 0.3)',
              borderRadius: '15px',
              margin: '2rem 0 1rem 0',
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomContent;
