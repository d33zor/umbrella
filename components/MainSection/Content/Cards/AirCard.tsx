import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/MainSection/Content/Cards/AirCard.module.css';
import AirIcon from '../../../icons/other/AirIcon';
import LoadingTemplate from '../../../LoadingTemplate';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  data: {
    pollutan?: string;
    aqi?: number;
    wind?: string;
  };
  loading?: boolean;
};

const AirCard = ({ data: { pollutan, aqi, wind }, loading }: Props) => {
  function calculateAQI(count: number): string {
    return Math.round(count) <= 2
      ? 'Low'
      : Math.round(count) <= 3
      ? 'Moderate'
      : Math.round(count) <= 4
      ? 'High'
      : 'Very High';
  }

  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  return (
    <>
      <AnimatePresence>
        {!loading ? (
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
                <div className={styles.HeaderDescription}>
                  Main pollutan: {pollutan}
                </div>
              </div>
            </div>
            <div className={styles.AqiWindWrapper}>
              <div className={styles.AqiWrapper}>
                <div className={styles.AqiCount}>{aqi}</div>
                <motion.div
                  className={styles.Aqi}
                  initial={{ background: 'var(--green-color)' }}
                  animate={{
                    background: aqi
                      ? calculateAQI(aqi) === 'Low'
                        ? 'var(--green-color)'
                        : calculateAQI(aqi) === 'Moderate'
                        ? 'var(--yellow-color)'
                        : calculateAQI(aqi) === 'High'
                        ? 'var(--light-orange-color)'
                        : 'var(--red-color)'
                      : 'var(--green-color)',
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
                    width: `${aqi ? aqi * 20 : 0}%`,
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
        ) : (
          <LoadingTemplate
            style={{
              padding: '2rem',
              width: `${
                windowSize && windowSize > 866 ? '50%' : 'calc(100% - 6rem)'
              }`,
              height: `${
                windowSize && windowSize > 1366
                  ? '100%'
                  : windowSize && windowSize > 866
                  ? '368px'
                  : '367px'
              }`,
              background: 'rgba(200, 200, 200, 0.3)',
              margin: `${
                windowSize && windowSize > 866 ? '0 4rem 0 1rem' : '0 3rem'
              }`,
              borderRadius: '25px',
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AirCard;
