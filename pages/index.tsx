import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../components/icons/logo/Logo';
import MoonIcon from '../components/icons/other/MoonIcon';
import SearchBar from '../components/MainSection/SearchBar/SearchBar';
import styles from '../styles/Main.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Umbrella</title>
        <meta
          name='description'
          content='Umbrella - weather info and forecast for 5 days'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MoonIcon style={{ position: 'absolute', right: '1rem', top: '1rem' }} />
      <div className={styles.Wrapper}>
        <Logo width={300} height={100} type='main' />
        <div className={styles.SearchWrapper}>
          <SearchBar
            style={{
              position: 'relative',
              justifyContent: 'center',
              flex: 'initial',
            }}
            status={200}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
