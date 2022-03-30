import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MainSection from '../../components/MainSection/MainSection';
import SideSection from '../../components/SideSection/SideSection';
import axios from 'axios';

type Props = {};

const LocationPage = (props: Props) => {
  const router = useRouter();
  const { location } = router.query;
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(true);
  const [basicData, setBasicData] = useState(Object);
  const [data, setData] = useState(Object);
  const [airData, setAirData] = useState(Object);

  function calculateMainPollutan(components: {
    [key: string]: number;
  }): string {
    const pollutan = Object.keys(components).reduce((a, b) =>
      components[a] > components[b] ? a : b
    );
    const names: { [key: string]: string } = {
      co: 'CO',
      no: 'NO',
      no2: 'NO2',
      o3: 'O3',
      so2: 'SO2',
      pm2_5: 'PM2.5',
      pm10: 'PM10',
      nh3: 'NH3',
    };
    return names[pollutan];
  }

  function calculateWindDirection(deg: number): string {
    return deg < 90
      ? 'North'
      : deg < 180
      ? 'East'
      : deg < 270
      ? 'South'
      : 'West';
  }

  useEffect(() => {
    if (!location) return;
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`
      )
      .then((res) => {
        setBasicData(res.data);
        setStatus(res.status);
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  }, [router.isReady, location, router]);

  useEffect(() => {
    if (Object.keys(basicData).length === 0) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${basicData.coord.lat}&lon=${basicData.coord.lon}&units=metric&appid=${process.env.API_KEY}`
      )
      .then((res) => {
        setAirData(res.data);
        setStatus(res.status);
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  }, [basicData]);

  useEffect(() => {
    if (Object.keys(basicData).length === 0) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${basicData.coord.lat}&lon=${basicData.coord.lon}&units=metric&appid=${process.env.API_KEY}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setStatus(res.status);
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  }, [airData]);

  return (
    <>
      <Head>
        <title>
          Weather
          {Object.keys(basicData).length > 0
            ? ` in ${basicData.name}, ${
                new Intl.DisplayNames(['en'], { type: 'region' }).of(
                  basicData.sys.country
                ) || basicData.sys.country
              }`
            : ''}{' '}
          - Umbrella
        </title>
        <meta
          name='description'
          content='Umbrella - weather info and forecast for 5 days'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='wrapper'>
        <MainSection
          data={
            !loading && Object.keys(data).length > 0
              ? {
                  sun: basicData.weather[0].main,
                  location: location,
                  temp: basicData.main.temp,
                  nightTemp: data.daily[0].temp.night,
                  pressure: data.current.pressure,
                  visibility: basicData.visibility,
                  humidity: basicData.main.humidity,
                  pollutan: calculateMainPollutan(airData.list[0].components),
                  aqi: airData.list[0].main.aqi,
                  wind: calculateWindDirection(basicData.wind.deg),
                  offset: data.timezone_offset,
                  dt: {
                    eight: data.hourly[8].dt,
                    sixteen: data.hourly[16].dt,
                    twentyfour: data.hourly[24].dt,
                  },
                  tempToday: {
                    now: {
                      temp: basicData.main.temp,
                      id: basicData.weather[0].id,
                    },
                    eight: {
                      temp: data.hourly[8].temp,
                      id: data.hourly[8].weather[0].id,
                    },
                    sixteen: {
                      temp: data.hourly[16].temp,
                      id: data.hourly[16].weather[0].id,
                    },
                    twentyfour: {
                      temp: data.hourly[24].temp,
                      id: data.hourly[24].weather[0].id,
                    },
                  },
                  popToday: {
                    now: {
                      pop: data.hourly[0].pop,
                      id: data.hourly[0].weather[0].id,
                    },
                    eight: {
                      pop: data.hourly[8].pop,
                      id: data.hourly[8].weather[0].id,
                    },
                    sixteen: {
                      pop: data.hourly[16].pop,
                      id: data.hourly[16].weather[0].id,
                    },
                    twentyfour: {
                      pop: data.hourly[24].pop,
                      id: data.hourly[24].weather[0].id,
                    },
                  },
                  windToday: {
                    now: data.hourly[0].wind_speed,
                    eight: data.hourly[8].wind_speed,
                    sixteen: data.hourly[16].wind_speed,
                    twentyfour: data.hourly[24].wind_speed,
                  },
                }
              : {}
          }
          status={status}
          loading={loading}
        />
        <SideSection
          data={
            !loading && Object.keys(data).length > 0
              ? {
                  city: basicData.name,
                  country:
                    new Intl.DisplayNames(['en'], { type: 'region' }).of(
                      basicData.sys.country
                    ) || basicData.sys.country,
                  condition: basicData.weather[0].main,
                  temp: basicData.main.temp,
                  sunrise: data.current.sunrise,
                  sunset: data.current.sunset,
                  nextSunrise: data.daily[1].sunrise,
                  uvi: data.current.uvi,
                  offset: basicData.timezone,
                  id: basicData.weather[0].id,
                  prediction: {
                    first: {
                      date: data.daily[1].dt,
                      condition: {
                        id: data.daily[1].weather[0].id,
                        main: data.daily[1].weather[0].main,
                      },
                      day: data.daily[1].temp.day,
                      night: data.daily[1].temp.night,
                    },
                    second: {
                      date: data.daily[2].dt,
                      condition: {
                        id: data.daily[2].weather[0].id,
                        main: data.daily[2].weather[0].main,
                      },
                      day: data.daily[2].temp.day,
                      night: data.daily[2].temp.night,
                    },
                    third: {
                      date: data.daily[3].dt,
                      condition: {
                        id: data.daily[3].weather[0].id,
                        main: data.daily[3].weather[0].main,
                      },
                      day: data.daily[3].temp.day,
                      night: data.daily[3].temp.night,
                    },
                    fourth: {
                      date: data.daily[4].dt,
                      condition: {
                        id: data.daily[4].weather[0].id,
                        main: data.daily[4].weather[0].main,
                      },
                      day: data.daily[4].temp.day,
                      night: data.daily[4].temp.night,
                    },
                    fifth: {
                      date: data.daily[5].dt,
                      condition: {
                        id: data.daily[5].weather[0].id,
                        main: data.daily[5].weather[0].main,
                      },
                      day: data.daily[5].temp.day,
                      night: data.daily[5].temp.night,
                    },
                  },
                }
              : {}
          }
          loading={loading}
        />
      </div>
    </>
  );
};

export default LocationPage;
