import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from '../../styles/MainSection/MainSection.module.css';
import WeatherCard from './Content/Cards/WeatherCard';
import AirCard from './Content/Cards/AirCard';
import BottomSection from './Content/BottomSection/BottomSection';

type Props = {
  data: {
    sun?: string;
    location?: any;
    temp?: number;
    nightTemp?: number;
    pressure?: number;
    visibility?: number;
    humidity?: number;
    pollutan?: string;
    aqi?: number;
    wind?: string;
    tempToday?: { [key: string]: { [key: string]: number } };
    popToday?: { [key: string]: { [key: string]: number } };
    windToday?: { [key: string]: number };
    dt?: { [key: string]: number };
    offset?: number;
  };
  loading: boolean;
  status: number;
};

const MainSection = ({
  data: {
    sun,
    location,
    temp,
    nightTemp,
    pressure,
    visibility,
    humidity,
    pollutan,
    aqi,
    wind,
    tempToday,
    popToday,
    windToday,
    dt,
    offset,
  },
  loading,
  status,
}: Props) => {
  return (
    <div className={styles.Wrapper}>
      <SearchBar location={location} status={status} type='location' />
      <div className={styles.ContentWrapper}>
        <div className={styles.Cards}>
          <WeatherCard
            data={{ temp, nightTemp, sun, pressure, visibility, humidity }}
            loading={loading}
          />
          <AirCard data={{ pollutan, aqi, wind }} loading={loading} />
        </div>
        <div className={styles.BottomWrapper}>
          <BottomSection
            loading={loading}
            tempToday={tempToday}
            popToday={popToday}
            windToday={windToday}
            offset={offset}
            dt={dt}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
