import React, { useEffect, useState } from 'react';
import styles from '../../styles/MainSection/MainSection.module.css';
import WeatherCard from './Content/Cards/WeatherCard';
import AirCard from './Content/Cards/AirCard';
import BottomSection from './Content/BottomSection/BottomSection';
import TopNavigation from './TopNavigation';
import calculateMainPollutant from '../../utils/calculateMainPollutant';
import calculateWindDirection from '../../utils/calculateWindDirection';
import LoadingTemplate from '../LoadingTemplate';
import type { BasicData } from '../../types/BasicData';
import type { AirData } from '../../types/AirData';
import { Data } from '../../types/Data';

type Props = {
  data: {
    basicData: BasicData;
    airData: AirData;
    data: Data & {
      timezone_offset: number;
      daily: [
        {
          temp: {
            night: number;
          };
        }
      ];
    };
    location: string;
    status: number;
    loading: boolean;
  };
};

const MainSection = ({ data: { basicData, airData, data, location, status, loading } }: Props) => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <TopNavigation location={location} status={status} />
      <div className={styles.ContentWrapper}>
        <div className={styles.Cards}>
          {!loading ? (
            <WeatherCard
              data={{
                temp: basicData.main.temp,
                nightTemp: data.daily[0].temp.night,
                sun: basicData.sun,
                pressure: data.current.pressure,
                visibility: basicData.visibility,
                humidity: basicData.main.humidity,
              }}
            />
          ) : (
            <LoadingTemplate
              style={{
                padding: '2rem',
                width: `${windowSize && windowSize > 866 ? '50%' : 'calc(100% - 6rem)'}`,
                height: `${
                  windowSize && windowSize > 1366
                    ? '100%'
                    : windowSize && windowSize > 866
                    ? '368px'
                    : '560px'
                }`,
                background: 'rgba(200, 200, 200, 0.3)',
                margin: `${windowSize && windowSize > 866 ? '0 1rem 0 4rem' : '0 3rem'}`,
                borderRadius: '25px',
              }}
            />
          )}
          {!loading ? (
            <AirCard
              data={{
                pollutant: calculateMainPollutant(airData.list[0].components),
                aqi: airData.list[0].main.aqi,
                wind: calculateWindDirection(basicData.wind.deg),
              }}
            />
          ) : (
            <LoadingTemplate
              style={{
                padding: '2rem',
                width: `${windowSize && windowSize > 866 ? '50%' : 'calc(100% - 6rem)'}`,
                height: `${
                  windowSize && windowSize > 1366
                    ? '100%'
                    : windowSize && windowSize > 866
                    ? '368px'
                    : '367px'
                }`,
                background: 'rgba(200, 200, 200, 0.3)',
                margin: `${windowSize && windowSize > 866 ? '0 4rem 0 1rem' : '0 3rem'}`,
                borderRadius: '25px',
              }}
            />
          )}
        </div>
        <div className={styles.BottomWrapper}>
          {!loading ? (
            <BottomSection data={{ data, offset: data.timezone_offset, windowSize }} />
          ) : (
            <LoadingTemplate
              style={{
                padding: '2rem',
                width: 'calc(100% - 8rem)',
                height: `${
                  windowSize && windowSize > 1366
                    ? 'calc(100% - 2rem)'
                    : windowSize && windowSize > 866
                    ? '25rem'
                    : '350px'
                }`,
                background: 'rgba(200, 200, 200, 0.3)',
                margin: `${windowSize && windowSize > 866 ? '0 4rem 0 4rem' : '0 3rem'}`,
                borderRadius: '25px',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
