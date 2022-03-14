import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../../../styles/MainSection/Content/BottomSection/BottomSection.module.css';
import IconButton from '../../../IconButton';
import BottomContent from './BottomContent';

type Props = {
  tempToday?: { [key: string]: { [key: string]: number } };
  popToday?: { [key: string]: { [key: string]: number } };
  windToday?: { [key: string]: number };
  loading?: boolean;
  offset?: number;
  dt?: { [key: string]: number };
};

const BottomSection = ({
  tempToday,
  popToday,
  windToday,
  loading,
  offset,
  dt,
}: Props) => {
  const [bottom, setBottom] = useState<string>('temperature');

  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = (): void => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TitleWrapper}>
        <AnimatePresence initial={false}>
          <motion.div
            className={styles.Title}
            animate={{
              left:
                windowSize && windowSize < 866
                  ? bottom === 'wind'
                    ? '-2rem'
                    : '-4.75rem'
                  : '0rem',
            }}
          >
            How&apos;s the
            {bottom === 'temperature' ? (
              <motion.div
                key={bottom}
                className={styles.TitleType}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                temperature
              </motion.div>
            ) : bottom === 'precipitation' ? (
              <motion.div
                key={bottom}
                className={styles.TitleType}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                precipitation
              </motion.div>
            ) : (
              <motion.div
                key={bottom}
                className={styles.TitleType}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                wind
              </motion.div>
            )}
            <motion.div
              className={styles.TitleToday}
              animate={{
                left:
                  windowSize && windowSize < 866
                    ? bottom === 'wind'
                      ? '4rem'
                      : '9.75rem'
                    : bottom === 'wind'
                    ? '13.75rem'
                    : '20.75rem',
              }}
            >
              today?
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.Icons}>
          <IconButton
            handleClick={() => {
              setBottom('temperature');
            }}
            className={bottom === 'temperature' && 'active'}
            svg={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V10.8027C16.7934 11.8401 18 13.7792 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 13.7792 7.2066 11.8401 9 10.8027V5ZM11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12C13 12.042 12.9974 12.0834 12.9924 12.1241C14.7215 12.5655 16 14.1334 16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16C8 14.1334 9.27853 12.5655 11.0076 12.1241C11.0026 12.0834 11 12.042 11 12V5Z'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
                />
                <rect x='16' y='3' width='4' height='1' rx='0.5' />
                <rect x='16' y='6' width='4' height='1' rx='0.5' />
                <rect x='16' y='9' width='4' height='1' rx='0.5' />
              </svg>
            }
            label='temperature_button'
          />
          <IconButton
            handleClick={() => {
              setBottom('precipitation');
            }}
            className={bottom === 'precipitation' && 'active'}
            svg={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 1C11.4477 1 11 1.44772 11 2V3.05493C6.50005 3.55238 3 7.36745 3 12C3 12.4538 3.03359 12.8998 3.09843 13.3356L3.09594 13.344L3.21822 14.0375C4.13503 13.402 5.48927 13 7 13C7.91072 13 8.76456 13.1461 9.5 13.4014C9.95889 13.2421 10.4639 13.1253 11 13.06V18C11 19.6569 12.3431 21 14 21C15.6569 21 17 19.6569 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V15.1707V13.06C13.5361 13.1253 14.0411 13.2421 14.5 13.4014C15.2354 13.1461 16.0893 13 17 13C18.4736 13 19.7982 13.3825 20.7133 13.991L20.9236 13.1778C20.974 12.7923 21 12.3992 21 12C21 7.36745 17.5 3.55238 13 3.05493V2C13 1.44772 12.5523 1 12 1ZM12 11C12.7118 11 13.3801 11.1394 13.9592 11.3839C13.7723 7.74033 12.9662 5 12 5C11.0338 5 10.2277 7.74033 10.0408 11.3839C10.6199 11.1394 11.2882 11 12 11ZM17 11C16.6457 11 16.3021 11.0346 15.9749 11.0994C15.8412 8.71266 15.1825 6.6434 14.235 5.3644C16.8205 6.23492 18.7307 8.57413 18.9738 11.3901C18.3914 11.1418 17.7178 11 17 11ZM5.02621 11.3901C5.26926 8.57413 7.1795 6.23492 9.76495 5.3644C8.81752 6.6434 8.15876 8.71266 8.02506 11.0994C7.69791 11.0346 7.35434 11 7 11C6.28222 11 5.6086 11.1418 5.02621 11.3901Z'
                />
              </svg>
            }
            label='precipitation_button'
          />
          <IconButton
            handleClick={() => {
              setBottom('wind');
            }}
            className={bottom === 'wind' && 'active'}
            svg={
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <rect x='2.72727' y='8' width='7.27273' height='2' />
                <circle cx='3' cy='9' r='1' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.5 10C11.433 10 13 8.433 13 6.5C13 4.567 11.433 3 9.5 3C7.73676 3 6.27806 4.30385 6.03544 6H8.08535C8.29127 5.4174 8.84689 5 9.5 5C10.3284 5 11 5.67157 11 6.5C11 7.15311 10.5826 7.70873 10 7.91465V8H9.5H6.33682C6.89855 9.18247 8.1038 10 9.5 10Z'
                />
                <circle cx='7' cy='6' r='1' />
                <rect
                  width='7.27273'
                  height='2'
                  transform='matrix(1 0 0 -1 2.72727 16)'
                />
                <circle r='1' transform='matrix(1 0 0 -1 3 15)' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.5 14C11.433 14 13 15.567 13 17.5C13 19.433 11.433 21 9.5 21C7.73677 21 6.27806 19.6961 6.03545 18H8.08535C8.29127 18.5826 8.84689 19 9.5 19C10.3284 19 11 18.3284 11 17.5C11 16.8469 10.5826 16.2913 10 16.0854V16H9.5H6.33682C6.89855 14.8175 8.1038 14 9.5 14Z'
                />
                <circle r='1' transform='matrix(1 0 0 -1 7 18)' />
                <rect x='3' y='11' width='15' height='2' />
                <circle cx='3' cy='12' r='1' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.5 13C19.433 13 21 11.433 21 9.5C21 7.567 19.433 6 17.5 6C15.7368 6 14.2781 7.30385 14.0354 9H16.0854C16.2913 8.4174 16.8469 8 17.5 8C18.3284 8 19 8.67157 19 9.5C19 10.1531 18.5826 10.7087 18 10.9146V11H17.5H14.3368C14.8985 12.1825 16.1038 13 17.5 13Z'
                />
                <circle cx='15' cy='9' r='1' />
              </svg>
            }
            label='wind_button'
          />
        </div>
      </div>
      {bottom === 'temperature' && (
        <BottomContent
          tempToday={tempToday}
          loading={loading}
          offset={offset}
          type='temperature'
          dt={dt}
        />
      )}
      {bottom === 'precipitation' && (
        <BottomContent
          loading={loading}
          popToday={popToday}
          offset={offset}
          type='precipitation'
          dt={dt}
        />
      )}
      {bottom === 'wind' && (
        <BottomContent
          loading={loading}
          windToday={windToday}
          offset={offset}
          type='wind'
          dt={dt}
        />
      )}
    </div>
  );
};

export default BottomSection;
