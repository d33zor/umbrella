import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/MainSection/SearchBar/SearchBar.module.css';
import SearchIcon from '../../icons/other/SearchIcon';

type Props = {
  location?: string;
  status: number;
  style?: any;
  type?: string;
};

const SearchBar = ({ location, status, style, type }: Props) => {
  const [formValue, setFormValue] = useState<string>('');
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = (): void => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    location && setFormValue(location);
  }, [location]);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    formValue && formValue != location && router.push(`/location/${formValue}`);
  };

  return (
    <div className={styles.Wrapper} style={style}>
      {type && type === 'location' && (
        <Link href='/' passHref={true}>
          <div className={styles.LogoWrapper}>
            {windowSize && windowSize > 866 ? (
              <Image src='/logo.svg' width='200px' height='50px' alt='logo' />
            ) : (
              <Image
                src='/logo_small.svg'
                width='50px'
                height='50px'
                alt='logo'
              />
            )}
          </div>
        </Link>
      )}

      <form onSubmit={handleSubmit} className={styles.Form}>
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
              Sorry, we could not find this location. Search by ZIP code or try
              again later.
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
    </div>
  );
};

export default SearchBar;
