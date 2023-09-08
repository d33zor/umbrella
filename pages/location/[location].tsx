import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MainSection from '../../components/MainSection/MainSection';
import SideSection from '../../components/SideSection/SideSection';
import axios, { AxiosError } from 'axios';
import getTitle from '../../utils/getTitle';

const LocationPage = () => {
  const router = useRouter();
  const location: string = router.query.location as string;
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(true);
  const [basicData, setBasicData] = useState(Object);
  const [data, setData] = useState(Object);
  const [airData, setAirData] = useState(Object);

  useEffect(() => {
    if (!location) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, status } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`
        );
        setBasicData(data);
        setStatus(status);
      } catch (err: AxiosError | any) {
        setStatus(err.response?.status);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    if (Object.keys(basicData).length === 0) return;
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${basicData.coord.lat}&lon=${basicData.coord.lon}&units=metric&appid=${process.env.API_KEY}`
        );

        setAirData(data);
        setStatus(status);
      } catch (err: AxiosError | any) {
        setStatus(err.response?.status);
      }
    };

    fetchData();
  }, [basicData]);

  useEffect(() => {
    if (Object.keys(basicData).length === 0) return;
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${basicData.coord.lat}&lon=${basicData.coord.lon}&units=metric&appid=${process.env.API_KEY}`
        );
        setData(data);
        setStatus(status);
      } catch (err: AxiosError | any) {
        setStatus(err.response?.status);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [airData]);

  return (
    <>
      <Head>
        <title>
          {!loading && Object.keys(basicData).length > 0 ? getTitle(basicData) : 'Umbrella'}
        </title>
        <meta name='description' content='Umbrella - weather info and forecast for 5 days' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='wrapper'>
        <MainSection
          data={{
            basicData,
            airData,
            data,
            location,
            status,
            loading,
          }}
        />

        <SideSection
          data={
            !loading && Object.keys(data).length > 0
              ? {
                  city: basicData.name,
                  country:
                    new Intl.DisplayNames(['en'], { type: 'region' }).of(basicData.sys.country) ||
                    basicData.sys.country,
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
