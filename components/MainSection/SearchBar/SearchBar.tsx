import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { CSSProperties, useEffect, useState } from 'react';
import styles from '../../../styles/MainSection/SearchBar/SearchBar.module.css';

import SearchIcon from '../../icons/other/SearchIcon';

type Props = {
  location?: string;
  status: number;
  style?: CSSProperties;
};

const SearchBar = ({ location, status, style }: Props) => {
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    location && setFormValue(location);
  }, [location]);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formValue && formValue != location && router.push(`/location/${formValue}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form} style={style}>
      <input
        className={styles.Input}
        type='text'
        placeholder='Search a location...'
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
      <SearchIcon svgClass={styles.Icon} parentClass={styles.IconParent} />

      <AnimatePresence initial={false}>
        {status === 404 && (
          <motion.div
            initial={{ y: -30, scaleY: 0.1, opacity: 0 }}
            animate={{ y: 0, scaleY: 1, opacity: 1 }}
            exit={{ y: -30, scaleY: 0.1, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.Error}
          >
            Sorry, we could not find this location. Search by ZIP code or try again later.
          </motion.div>
        )}
        {status === 429 && (
          <motion.div
            initial={{ y: -30, scaleY: 0.1, opacity: 0 }}
            animate={{ y: 0, scaleY: 1, opacity: 1 }}
            exit={{ y: -30, scaleY: 0.1, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.Error}
          >
            An API error occurred. Try again later.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default SearchBar;
