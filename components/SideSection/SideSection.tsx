import React, { useEffect, useState } from 'react';
import styles from '../../styles/SideSection/SideSection.module.css';
import IconButton from '../IconButton';
import SunPosition from './SunPosition';
import UVIndex from './UVIndex';
import WeatherPrediction from './WeatherPrediction';
import CloudIcon from '../icons/weather/CloudIcon';
import RainIcon from '../icons/weather/RainIcon';
import SunIcon from '../icons/weather/SunIcon';
import SnowIcon from '../icons/weather/SnowIcon';
import ThunderIcon from '../icons/weather/ThunderIcon';
import FogIcon from '../icons/weather/FogIcon';
import SunAndCloudIcon from '../icons/weather/SunAndCloudIcon';
import LoadingTemplate from '../LoadingTemplate';

type Props = {
  data: {
    city?: string;
    country?: string;
    condition?: object;
    temp?: number;
    sunrise?: number;
    sunset?: number;
    nextSunrise?: number;
    uvi?: number;
    prediction?: any;
    offset?: number;
    id?: number;
  };
  loading: boolean;
};

const SideSection = ({
  data: {
    city,
    country,
    condition,
    temp,
    sunrise,
    sunset,
    nextSunrise,
    uvi,
    prediction,
    offset,
    id,
  },
  loading,
}: Props) => {
  const [predictionExpanded, setPredictionExpanded] = useState(false);

  function getTime(timestamp: number): string {
    return new Date(
      (timestamp + (offset || 0) + new Date().getTimezoneOffset() * 60) * 1000
    ).toLocaleTimeString([], {
      timeStyle: 'short',
    });
  }

  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval((): void => setTime(Date.now()), 5000);
    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.Wrapper}>
      <>
        <div className={styles.GeneralWrapper}>
          <div className={styles.General}>
            {!loading ? (
              <>
                <div className={styles.InfoWrapper}>
                  {id && id >= 802 && id <= 804 ? (
                    <CloudIcon svgSize={40} />
                  ) : id && id === 800 ? (
                    <SunIcon svgSize={40} />
                  ) : id && id >= 300 && id <= 531 ? (
                    <RainIcon svgSize={40} />
                  ) : id && id >= 600 && id <= 622 ? (
                    <SnowIcon svgSize={40} />
                  ) : id && id >= 200 && id <= 232 ? (
                    <ThunderIcon svgSize={40} />
                  ) : id && id === 801 ? (
                    <SunAndCloudIcon svgSize={40} />
                  ) : (
                    <FogIcon svgSize={40} />
                  )}
                  <div className={styles.Info}>
                    <div className={styles.Sun}>
                      {new Date(
                        Date.now() +
                          ((offset || 0) +
                            new Date().getTimezoneOffset() * 60) *
                            1000
                      ).toLocaleTimeString([], {
                        timeStyle: 'short',
                      })}{' '}
                      {condition}
                    </div>
                    <div className={styles.City}>
                      {city}, {country}
                    </div>
                  </div>
                </div>
                <div className={styles.Temperature}>
                  {temp && `${Math.round(temp)} °C`}
                </div>
              </>
            ) : (
              <LoadingTemplate
                style={{
                  width: '100%',
                  height: '43px',
                  background: 'rgba(200, 200, 200, 0.3)',
                  borderRadius: '15px',
                }}
              />
            )}
          </div>
        </div>
        {!loading ? (
          <SunPosition
            sun={{ sunrise, sunset, getTime, nextSunrise, now: Date.now() }}
          />
        ) : (
          <LoadingTemplate
            style={{
              width: '100%',
              height: '30%',
              background: 'rgba(200, 200, 200, 0.3)',
              borderRadius: '15px',
            }}
          />
        )}
        {!loading ? (
          <UVIndex count={uvi} />
        ) : (
          <LoadingTemplate
            style={{
              width: '100%',
              height: '15%',
              background: 'rgba(200, 200, 200, 0.3)',
              borderRadius: '25px',
              marginTop: '2rem',
            }}
          />
        )}

        {!loading ? (
          <WeatherPrediction expanded={predictionExpanded} data={prediction} />
        ) : (
          <LoadingTemplate
            style={{
              width: '100%',
              height: '30%',
              background: 'rgba(200, 200, 200, 0.3)',
              borderRadius: '15px',
              marginTop: '4rem',
            }}
          />
        )}
        {!loading && (
          <div className={styles.ButtonContainer}>
            <IconButton
              handleClick={() =>
                predictionExpanded
                  ? setPredictionExpanded(false)
                  : setPredictionExpanded(true)
              }
              className='active'
              text={!predictionExpanded ? 'Next days' : 'Close'}
              svg={
                !predictionExpanded ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='0 0 24 24'
                  >
                    <mask
                      id='path-1-outside-1_4_73'
                      maskUnits='userSpaceOnUse'
                      x='3'
                      y='2'
                      width='18'
                      height='19'
                    >
                      <rect fill='white' x='3' y='2' width='18' height='19' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8 3.5C8 3.22386 8.22386 3 8.5 3C8.77614 3 9 3.22386 9 3.5V5H15V3.5C15 3.22386 15.2239 3 15.5 3C15.7761 3 16 3.22386 16 3.5V5C18.2091 5 20 6.79086 20 9V12V14.017V14.2676V14.7929V15.328L15.328 20H14.7829H14.2676H8C5.79086 20 4 18.2091 4 16V9C4 6.79086 5.79086 5 8 5V3.5ZM19.1111 9V14.003C19.0743 14.001 19.0373 14 19 14H16C14.8954 14 14 14.8954 14 16V19H7.88889C6.23203 19 4.88889 17.6569 4.88889 16V9C4.88889 7.34314 6.23204 6 7.88889 6H8V7.5C8 7.77614 8.22386 8 8.5 8C8.77614 8 9 7.77614 9 7.5V6H15V7.5C15 7.77614 15.2239 8 15.5 8C15.7761 8 16 7.77614 16 7.5V6H16.1111C17.768 6 19.1111 7.34314 19.1111 9ZM15.017 19H14.7812L14.7765 16.302C14.7751 15.4736 15.4454 14.8009 16.2739 14.7994L19.1111 14.7945V14.9059L15.017 19ZM8.13574 14V9.71094H8.05078L6.50098 10.2969V10.7861L7.59375 10.3877V14H8.13574ZM12.5244 14V13.5547H10.3857L11.5283 12.3154C11.6377 12.1963 11.7402 12.0752 11.8359 11.9521C11.9336 11.8291 12.0186 11.7041 12.0908 11.5771C12.165 11.4502 12.2227 11.3232 12.2637 11.1963C12.3066 11.0674 12.3281 10.9404 12.3281 10.8154C12.3281 10.5869 12.2764 10.3877 12.1729 10.2178C12.0713 10.0459 11.9248 9.91309 11.7334 9.81934C11.542 9.72363 11.3115 9.67578 11.042 9.67578C10.7393 9.67578 10.4844 9.73535 10.2773 9.85449C10.0703 9.97168 9.91406 10.1299 9.80859 10.3291C9.70312 10.5283 9.65039 10.748 9.65039 10.9883H10.1924C10.1924 10.8184 10.2236 10.668 10.2861 10.5371C10.3486 10.4062 10.4424 10.3047 10.5674 10.2324C10.6943 10.1582 10.8525 10.1211 11.042 10.1211C11.2002 10.1211 11.335 10.1553 11.4463 10.2236C11.5576 10.292 11.6416 10.3838 11.6982 10.499C11.7568 10.6123 11.7861 10.7393 11.7861 10.8799C11.7861 10.9912 11.7666 11.1006 11.7275 11.208C11.6904 11.3135 11.624 11.4336 11.5283 11.5684C11.4346 11.7012 11.3018 11.8633 11.1299 12.0547L9.73242 13.6104V14H12.5244Z'
                      />
                    </mask>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8 3.5C8 3.22386 8.22386 3 8.5 3C8.77614 3 9 3.22386 9 3.5V5H15V3.5C15 3.22386 15.2239 3 15.5 3C15.7761 3 16 3.22386 16 3.5V5C18.2091 5 20 6.79086 20 9V12V14.017V14.2676V14.7929V15.328L15.328 20H14.7829H14.2676H8C5.79086 20 4 18.2091 4 16V9C4 6.79086 5.79086 5 8 5V3.5ZM19.1111 9V14.003C19.0743 14.001 19.0373 14 19 14H16C14.8954 14 14 14.8954 14 16V19H7.88889C6.23203 19 4.88889 17.6569 4.88889 16V9C4.88889 7.34314 6.23204 6 7.88889 6H8V7.5C8 7.77614 8.22386 8 8.5 8C8.77614 8 9 7.77614 9 7.5V6H15V7.5C15 7.77614 15.2239 8 15.5 8C15.7761 8 16 7.77614 16 7.5V6H16.1111C17.768 6 19.1111 7.34314 19.1111 9ZM15.017 19H14.7812L14.7765 16.302C14.7751 15.4736 15.4454 14.8009 16.2739 14.7994L19.1111 14.7945V14.9059L15.017 19ZM8.13574 14V9.71094H8.05078L6.50098 10.2969V10.7861L7.59375 10.3877V14H8.13574ZM12.5244 14V13.5547H10.3857L11.5283 12.3154C11.6377 12.1963 11.7402 12.0752 11.8359 11.9521C11.9336 11.8291 12.0186 11.7041 12.0908 11.5771C12.165 11.4502 12.2227 11.3232 12.2637 11.1963C12.3066 11.0674 12.3281 10.9404 12.3281 10.8154C12.3281 10.5869 12.2764 10.3877 12.1729 10.2178C12.0713 10.0459 11.9248 9.91309 11.7334 9.81934C11.542 9.72363 11.3115 9.67578 11.042 9.67578C10.7393 9.67578 10.4844 9.73535 10.2773 9.85449C10.0703 9.97168 9.91406 10.1299 9.80859 10.3291C9.70312 10.5283 9.65039 10.748 9.65039 10.9883H10.1924C10.1924 10.8184 10.2236 10.668 10.2861 10.5371C10.3486 10.4062 10.4424 10.3047 10.5674 10.2324C10.6943 10.1582 10.8525 10.1211 11.042 10.1211C11.2002 10.1211 11.335 10.1553 11.4463 10.2236C11.5576 10.292 11.6416 10.3838 11.6982 10.499C11.7568 10.6123 11.7861 10.7393 11.7861 10.8799C11.7861 10.9912 11.7666 11.1006 11.7275 11.208C11.6904 11.3135 11.624 11.4336 11.5283 11.5684C11.4346 11.7012 11.3018 11.8633 11.1299 12.0547L9.73242 13.6104V14H12.5244Z'
                    />
                    <path
                      d='M9 5H8.8V5.2H9V5ZM15 5V5.2H15.2V5H15ZM16 5H15.8V5.2H16V5ZM20 15.328L20.1414 15.4694L20.2 15.4108V15.328H20ZM15.328 20V20.2H15.4108L15.4694 20.1414L15.328 20ZM8 5V5.2H8.2V5H8ZM19.1111 14.003L19.1002 14.2027L19.3111 14.2143V14.003H19.1111ZM14 19V19.2H14.2V19H14ZM8 6H8.2V5.8H8V6ZM9 6V5.8H8.8V6H9ZM15 6H15.2V5.8H15V6ZM16 6V5.8H15.8V6H16ZM14.7812 19L14.5812 19.0003L14.5816 19.2H14.7812V19ZM15.017 19V19.2H15.0999L15.1585 19.1414L15.017 19ZM14.7765 16.302L14.9765 16.3017L14.9765 16.3017L14.7765 16.302ZM16.2739 14.7994L16.2735 14.5994L16.2735 14.5994L16.2739 14.7994ZM19.1111 14.7945H19.3111V14.5941L19.1108 14.5945L19.1111 14.7945ZM19.1111 14.9059L19.2525 15.0474L19.3111 14.9888V14.9059H19.1111ZM8.13574 9.71094H8.33574V9.51094H8.13574V9.71094ZM8.13574 14V14.2H8.33574V14H8.13574ZM8.05078 9.71094V9.51094H8.01424L7.98005 9.52386L8.05078 9.71094ZM6.50098 10.2969L6.43025 10.1098L6.30098 10.1587V10.2969H6.50098ZM6.50098 10.7861H6.30098V11.0719L6.56949 10.974L6.50098 10.7861ZM7.59375 10.3877H7.79375V10.1019L7.52524 10.1998L7.59375 10.3877ZM7.59375 14H7.39375V14.2H7.59375V14ZM12.5244 13.5547H12.7244V13.3547H12.5244V13.5547ZM12.5244 14V14.2H12.7244V14H12.5244ZM10.3857 13.5547L10.2387 13.4191L9.92931 13.7547H10.3857V13.5547ZM11.5283 12.3154L11.6754 12.451L11.6757 12.4507L11.5283 12.3154ZM11.8359 11.9521L11.6793 11.8278L11.6781 11.8294L11.8359 11.9521ZM12.0908 11.5771L11.9181 11.4762L11.917 11.4782L12.0908 11.5771ZM12.2637 11.1963L12.0739 11.133L12.0734 11.1348L12.2637 11.1963ZM12.1729 10.2178L12.0007 10.3195L12.002 10.3218L12.1729 10.2178ZM11.7334 9.81934L11.644 9.99823L11.6454 9.99895L11.7334 9.81934ZM10.2773 9.85449L10.3759 10.0285L10.3771 10.0278L10.2773 9.85449ZM9.65039 10.9883H9.45039V11.1883H9.65039V10.9883ZM10.1924 10.9883V11.1883H10.3924V10.9883H10.1924ZM10.5674 10.2324L10.6675 10.4056L10.6683 10.4051L10.5674 10.2324ZM11.6982 10.499L11.5187 10.5873L11.5206 10.5909L11.6982 10.499ZM11.7275 11.208L11.5396 11.1397L11.5389 11.1416L11.7275 11.208ZM11.5283 11.5684L11.3653 11.4526L11.3649 11.453L11.5283 11.5684ZM11.1299 12.0547L11.2787 12.1883L11.2787 12.1883L11.1299 12.0547ZM9.73242 13.6104L9.58364 13.4767L9.53242 13.5337V13.6104H9.73242ZM9.73242 14H9.53242V14.2H9.73242V14ZM8.5 2.8C8.1134 2.8 7.8 3.1134 7.8 3.5H8.2C8.2 3.33432 8.33432 3.2 8.5 3.2V2.8ZM9.2 3.5C9.2 3.1134 8.8866 2.8 8.5 2.8V3.2C8.66568 3.2 8.8 3.33432 8.8 3.5H9.2ZM9.2 5V3.5H8.8V5H9.2ZM15 4.8H9V5.2H15V4.8ZM14.8 3.5V5H15.2V3.5H14.8ZM15.5 2.8C15.1134 2.8 14.8 3.1134 14.8 3.5H15.2C15.2 3.33432 15.3343 3.2 15.5 3.2V2.8ZM16.2 3.5C16.2 3.1134 15.8866 2.8 15.5 2.8V3.2C15.6657 3.2 15.8 3.33432 15.8 3.5H16.2ZM16.2 5V3.5H15.8V5H16.2ZM20.2 9C20.2 6.68041 18.3196 4.8 16 4.8V5.2C18.0987 5.2 19.8 6.90132 19.8 9H20.2ZM20.2 12V9H19.8V12H20.2ZM20.2 14.017V12H19.8V14.017H20.2ZM20.2 14.2676V14.017H19.8V14.2676H20.2ZM20.2 14.7929V14.2676H19.8V14.7929H20.2ZM20.2 15.328V14.7929H19.8V15.328H20.2ZM15.4694 20.1414L20.1414 15.4694L19.8586 15.1866L15.1866 19.8586L15.4694 20.1414ZM14.7829 20.2H15.328V19.8H14.7829V20.2ZM14.2676 20.2H14.7829V19.8H14.2676V20.2ZM8 20.2H14.2676V19.8H8V20.2ZM3.8 16C3.8 18.3196 5.68041 20.2 8 20.2V19.8C5.90132 19.8 4.2 18.0987 4.2 16H3.8ZM3.8 9V16H4.2V9H3.8ZM8 4.8C5.68041 4.8 3.8 6.68041 3.8 9H4.2C4.2 6.90132 5.90132 5.2 8 5.2V4.8ZM7.8 3.5V5H8.2V3.5H7.8ZM19.3111 14.003V9H18.9111V14.003H19.3111ZM19 14.2C19.0336 14.2 19.067 14.2009 19.1002 14.2027L19.122 13.8033C19.0816 13.8011 19.041 13.8 19 13.8V14.2ZM16 14.2H19V13.8H16V14.2ZM14.2 16C14.2 15.0059 15.0059 14.2 16 14.2V13.8C14.785 13.8 13.8 14.785 13.8 16H14.2ZM14.2 19V16H13.8V19H14.2ZM7.88889 19.2H14V18.8H7.88889V19.2ZM4.68889 16C4.68889 17.7673 6.12157 19.2 7.88889 19.2V18.8C6.34248 18.8 5.08889 17.5464 5.08889 16H4.68889ZM4.68889 9V16H5.08889V9H4.68889ZM7.88889 5.8C6.12158 5.8 4.68889 7.23268 4.68889 9H5.08889C5.08889 7.4536 6.3425 6.2 7.88889 6.2V5.8ZM8 5.8H7.88889V6.2H8V5.8ZM8.2 7.5V6H7.8V7.5H8.2ZM8.5 7.8C8.33432 7.8 8.2 7.66568 8.2 7.5H7.8C7.8 7.8866 8.1134 8.2 8.5 8.2V7.8ZM8.8 7.5C8.8 7.66568 8.66568 7.8 8.5 7.8V8.2C8.8866 8.2 9.2 7.8866 9.2 7.5H8.8ZM8.8 6V7.5H9.2V6H8.8ZM15 5.8H9V6.2H15V5.8ZM15.2 7.5V6H14.8V7.5H15.2ZM15.5 7.8C15.3343 7.8 15.2 7.66568 15.2 7.5H14.8C14.8 7.8866 15.1134 8.2 15.5 8.2V7.8ZM15.8 7.5C15.8 7.66568 15.6657 7.8 15.5 7.8V8.2C15.8866 8.2 16.2 7.8866 16.2 7.5H15.8ZM15.8 6V7.5H16.2V6H15.8ZM16.1111 5.8H16V6.2H16.1111V5.8ZM19.3111 9C19.3111 7.23268 17.8784 5.8 16.1111 5.8V6.2C17.6575 6.2 18.9111 7.4536 18.9111 9H19.3111ZM14.7812 19.2H15.017V18.8H14.7812V19.2ZM14.5765 16.3024L14.5812 19.0003L14.9812 18.9997L14.9765 16.3017L14.5765 16.3024ZM16.2735 14.5994C15.3346 14.6011 14.5749 15.3635 14.5765 16.3024L14.9765 16.3017C14.9752 15.5837 15.5563 15.0007 16.2742 14.9994L16.2735 14.5994ZM19.1108 14.5945L16.2735 14.5994L16.2742 14.9994L19.1115 14.9945L19.1108 14.5945ZM19.3111 14.9059V14.7945H18.9111V14.9059H19.3111ZM15.1585 19.1414L19.2525 15.0474L18.9697 14.7645L14.8756 18.8586L15.1585 19.1414ZM7.93574 9.71094V14H8.33574V9.71094H7.93574ZM8.05078 9.91094H8.13574V9.51094H8.05078V9.91094ZM6.5717 10.484L8.12151 9.89801L7.98005 9.52386L6.43025 10.1098L6.5717 10.484ZM6.70098 10.7861V10.2969H6.30098V10.7861H6.70098ZM7.52524 10.1998L6.43247 10.5982L6.56949 10.974L7.66226 10.5756L7.52524 10.1998ZM7.79375 14V10.3877H7.39375V14H7.79375ZM8.13574 13.8H7.59375V14.2H8.13574V13.8ZM12.3244 13.5547V14H12.7244V13.5547H12.3244ZM10.3857 13.7547H12.5244V13.3547H10.3857V13.7547ZM11.3813 12.1799L10.2387 13.4191L10.5328 13.6903L11.6754 12.451L11.3813 12.1799ZM11.6781 11.8294C11.5858 11.948 11.4868 12.0649 11.381 12.1802L11.6757 12.4507C11.7886 12.3277 11.8946 12.2024 11.9938 12.0749L11.6781 11.8294ZM11.917 11.4782C11.8502 11.5956 11.771 11.7122 11.6793 11.8278L11.9926 12.0765C12.0961 11.946 12.1869 11.8126 12.2646 11.6761L11.917 11.4782ZM12.0734 11.1348C12.0372 11.2467 11.9858 11.3605 11.9182 11.4762L12.2635 11.6781C12.3443 11.5399 12.4081 11.3998 12.454 11.2578L12.0734 11.1348ZM12.1281 10.8154C12.1281 10.9171 12.1107 11.0228 12.0739 11.133L12.4534 11.2595C12.5026 11.112 12.5281 10.9637 12.5281 10.8154H12.1281ZM12.002 10.3218C12.0838 10.456 12.1281 10.6181 12.1281 10.8154H12.5281C12.5281 10.5558 12.469 10.3194 12.3437 10.1137L12.002 10.3218ZM11.6454 9.99895C11.8042 10.0767 11.9203 10.1836 12.0007 10.3195L12.345 10.116C12.2222 9.90823 12.0454 9.74943 11.8214 9.63972L11.6454 9.99895ZM11.042 9.87578C11.2883 9.87578 11.4866 9.91953 11.644 9.99822L11.8228 9.64045C11.5974 9.52773 11.3347 9.47578 11.042 9.47578V9.87578ZM10.3771 10.0278C10.5467 9.93024 10.7651 9.87578 11.042 9.87578V9.47578C10.7135 9.47578 10.4221 9.54046 10.1776 9.68115L10.3771 10.0278ZM9.98535 10.4227C10.0719 10.2591 10.2001 10.128 10.3759 10.0285L10.1788 9.68044C9.9405 9.81534 9.75618 10.0007 9.63184 10.2355L9.98535 10.4227ZM9.85039 10.9883C9.85039 10.7785 9.89615 10.5912 9.98535 10.4227L9.63184 10.2355C9.5101 10.4655 9.45039 10.7176 9.45039 10.9883H9.85039ZM10.1924 10.7883H9.65039V11.1883H10.1924V10.7883ZM10.1057 10.4509C10.0283 10.6129 9.99238 10.7936 9.99238 10.9883H10.3924C10.3924 10.8431 10.419 10.723 10.4666 10.6233L10.1057 10.4509ZM10.4673 10.0593C10.3072 10.1518 10.1855 10.2838 10.1057 10.4509L10.4666 10.6233C10.5118 10.5287 10.5776 10.4575 10.6675 10.4056L10.4673 10.0593ZM11.042 9.92109C10.8271 9.92109 10.6316 9.96318 10.4664 10.0598L10.6683 10.4051C10.757 10.3532 10.878 10.3211 11.042 10.3211V9.92109ZM11.5509 10.0532C11.4021 9.96179 11.2293 9.92109 11.042 9.92109V10.3211C11.1711 10.3211 11.2679 10.3488 11.3416 10.3941L11.5509 10.0532ZM11.8777 10.4108C11.8041 10.261 11.6939 10.141 11.5509 10.0532L11.3416 10.3941C11.4213 10.443 11.4791 10.5066 11.5188 10.5872L11.8777 10.4108ZM11.9861 10.8799C11.9861 10.7106 11.9506 10.5516 11.8759 10.4071L11.5206 10.5909C11.563 10.673 11.5861 10.7679 11.5861 10.8799H11.9861ZM11.9155 11.2764C11.9623 11.1476 11.9861 11.0151 11.9861 10.8799H11.5861C11.5861 10.9673 11.5709 11.0535 11.5396 11.1397L11.9155 11.2764ZM11.6914 11.6842C11.7932 11.5407 11.8707 11.4037 11.9162 11.2744L11.5389 11.1416C11.5101 11.2233 11.4548 11.3265 11.3653 11.4526L11.6914 11.6842ZM11.2787 12.1883C11.4532 11.994 11.5917 11.8254 11.6917 11.6837L11.3649 11.453C11.2775 11.5769 11.1504 11.7325 10.9811 11.9211L11.2787 12.1883ZM9.88121 13.744L11.2787 12.1883L10.9811 11.921L9.58364 13.4767L9.88121 13.744ZM9.93242 14V13.6104H9.53242V14H9.93242ZM12.5244 13.8H9.73242V14.2H12.5244V13.8Z'
                      mask='url(#path-1-outside-1_4_73)'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.46967 18.4697C5.17678 18.1768 5.17678 17.7019 5.46967 17.409L16.409 6.46967C16.7019 6.17678 17.1768 6.17678 17.4697 6.46967C17.7626 6.76256 17.7626 7.23744 17.4697 7.53033L6.53033 18.4697C6.23744 18.7626 5.76256 18.7626 5.46967 18.4697Z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.21968 6.21967C5.51257 5.92678 5.98744 5.92678 6.28034 6.21967L17.2197 17.159C17.5126 17.4519 17.5126 17.9268 17.2197 18.2197C16.9268 18.5126 16.4519 18.5126 16.159 18.2197L5.21968 7.28033C4.92678 6.98744 4.92678 6.51256 5.21968 6.21967Z'
                    />
                  </svg>
                )
              }
            />
          </div>
        )}
      </>
    </div>
  );
};

export default SideSection;