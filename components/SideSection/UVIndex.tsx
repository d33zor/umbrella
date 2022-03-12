import { motion } from 'framer-motion';
import React from 'react';
import styles from '../../styles/SideSection/UVIndex.module.css';
import SunIcon from '../icons/weather/SunIcon';

type Props = {
  count?: number;
};

const UVIndex = ({ count }: Props) => {
  function calculateUVLevel(count: number): string {
    return Math.round(count) <= 2
      ? 'Low'
      : Math.round(count) <= 5
      ? 'Moderate'
      : Math.round(count) <= 7
      ? 'High'
      : 'Very high';
  }

  return (
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
      className={styles.Wrapper}
    >
      <SunIcon svgSize={40} />
      <div className={styles.Description}>
        <div className={styles.Top}>
          <div className={styles.Count}>
            {(count || count === 0) && Math.round(count)} UVI
          </div>
          <motion.div
            className={styles.Level}
            initial={{ background: 'var(--green-color)' }}
            animate={{
              background:
                count || count === 0
                  ? calculateUVLevel(count) === 'Low'
                    ? 'var(--green-color)'
                    : calculateUVLevel(count) === 'Moderate'
                    ? 'var(--yellow-color)'
                    : calculateUVLevel(count) === 'High'
                    ? 'var(--light-orange-color)'
                    : 'var(--red-color)'
                  : 'var(--green-color)',
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            {(count || count === 0) && calculateUVLevel(count)}
          </motion.div>
        </div>
        <div className={styles.Bottom}>
          {(count || count === 0) && calculateUVLevel(count)} risk of UV
          overexposure
        </div>
      </div>
    </motion.div>
  );
};

export default UVIndex;
