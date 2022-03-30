import { CSSProperties, useEffect, useState } from 'react';
import styles from '../../../styles/MainSection/TopNavigation.module.css';

type Props = {
  svgSize?: number;
  style?: CSSProperties;
};

const MoonIcon = ({ svgSize, style }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState('false');

  useEffect(() => {
    setIsDarkMode(localStorage.getItem('dark') || 'false');
    setTimeout(() => {
      document.documentElement.style.setProperty(
        '--dark-mode-transition',
        '0.3s'
      );
    }, 1);
  }, []);

  useEffect(() => {
    if (isDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    }
  }, [isDarkMode]);

  return (
    <div
      style={style}
      className={styles.IconParent}
      onClick={() =>
        isDarkMode === 'true' ? setIsDarkMode('false') : setIsDarkMode('true')
      }
    >
      {isDarkMode ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={svgSize || '30'}
          height={svgSize || '30'}
          viewBox='0 0 30 30'
          fill='none'
        >
          <mask
            id='mask0_15_5'
            maskUnits='userSpaceOnUse'
            x='5'
            y='5'
            width='20'
            height='20'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.40523 18.4052C13.9281 18.4052 18.4052 13.9281 18.4052 8.40523C18.4052 7.95259 18.3752 7.50698 18.3169 7.07028C18.2048 6.22982 19.0078 5.48461 19.7254 5.93633C22.537 7.70627 24.4052 10.8376 24.4052 14.4052C24.4052 19.9281 19.9281 24.4052 14.4052 24.4052C10.8376 24.4052 7.70627 22.537 5.93633 19.7254C5.48461 19.0078 6.22982 18.2048 7.07028 18.3169C7.50698 18.3752 7.95259 18.4052 8.40523 18.4052Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask0_15_5)'>
            <path
              d='M5.93633 19.7254L4.66692 20.5245L5.93633 19.7254ZM7.07028 18.3169L6.87193 19.8037L7.07028 18.3169ZM18.3169 7.07029L16.8301 7.26864L18.3169 7.07029ZM16.9052 8.40524C16.9052 13.0997 13.0997 16.9052 8.40523 16.9052V19.9052C14.7565 19.9052 19.9052 14.7565 19.9052 8.40524H16.9052ZM16.8301 7.26864C16.8796 7.63976 16.9052 8.01912 16.9052 8.40524H19.9052C19.9052 7.88609 19.8707 7.37422 19.8037 6.87194L16.8301 7.26864ZM18.9263 7.20575C21.32 8.71265 22.9052 11.3744 22.9052 14.4052H25.9052C25.9052 10.3008 23.7539 6.69991 20.5245 4.66692L18.9263 7.20575ZM22.9052 14.4052C22.9052 19.0997 19.0997 22.9052 14.4052 22.9052V25.9052C20.7565 25.9052 25.9052 20.7565 25.9052 14.4052H22.9052ZM14.4052 22.9052C11.3744 22.9052 8.71264 21.32 7.20574 18.9263L4.66692 20.5245C6.6999 23.7539 10.3008 25.9052 14.4052 25.9052V22.9052ZM8.40523 16.9052C8.01911 16.9052 7.63975 16.8796 7.26863 16.8301L6.87193 19.8037C7.37421 19.8707 7.88608 19.9052 8.40523 19.9052V16.9052ZM7.20574 18.9263C7.26798 19.0251 7.3149 19.1794 7.29549 19.3532C7.27765 19.513 7.212 19.6222 7.1618 19.6813C7.07465 19.7839 6.97002 19.8168 6.87193 19.8037L7.26863 16.8301C6.33008 16.7049 5.43261 17.0833 4.87567 17.7387C4.28243 18.4369 4.04073 19.5298 4.66692 20.5245L7.20574 18.9263ZM19.8037 6.87194C19.8168 6.97003 19.7839 7.07466 19.6813 7.16181C19.6222 7.21201 19.513 7.27766 19.3532 7.2955C19.1794 7.31491 19.0251 7.26799 18.9263 7.20575L20.5245 4.66692C19.5298 4.04074 18.4369 4.28244 17.7387 4.87568C17.0833 5.43262 16.7049 6.33009 16.8301 7.26864L19.8037 6.87194Z'
              fill='#5F6479'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8 19C14.0751 19 19 13.4036 19 6.5C19 6.35559 18.9978 6.21173 18.9936 6.06848C21.974 7.58713 24 10.5694 24 14C24 18.9706 19.7467 23 14.5 23C11.1556 23 8.21478 21.3627 6.52197 18.8881C7.0054 18.9619 7.49879 19 8 19Z'
              fill='#5F6479'
            />
          </g>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={svgSize || '30'}
          height={svgSize || '30'}
          viewBox='0 0 30 30'
          fill='none'
        >
          <mask id='path-1-inside-1_15_5' fill='white'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.40524 18.4052C13.9281 18.4052 18.4052 13.9281 18.4052 8.40524C18.4052 7.9526 18.3752 7.50699 18.3169 7.07029C18.2048 6.22983 19.0078 5.48462 19.7254 5.93634C22.537 7.70628 24.4052 10.8376 24.4052 14.4052C24.4052 19.9281 19.9281 24.4052 14.4052 24.4052C10.8376 24.4052 7.70628 22.537 5.93634 19.7254C5.48462 19.0078 6.22983 18.2048 7.07029 18.3169C7.50699 18.3752 7.9526 18.4052 8.40524 18.4052Z'
            />
          </mask>
          <path
            d='M5.93634 19.7254L4.66693 20.5245L5.93634 19.7254ZM7.07029 18.3169L6.87194 19.8037L7.07029 18.3169ZM18.3169 7.07029L16.8301 7.26864L18.3169 7.07029ZM16.9052 8.40524C16.9052 13.0997 13.0997 16.9052 8.40524 16.9052V19.9052C14.7565 19.9052 19.9052 14.7565 19.9052 8.40524H16.9052ZM16.8301 7.26864C16.8796 7.63976 16.9052 8.01912 16.9052 8.40524H19.9052C19.9052 7.88609 19.8707 7.37422 19.8037 6.87194L16.8301 7.26864ZM18.9263 7.20575C21.32 8.71265 22.9052 11.3744 22.9052 14.4052H25.9052C25.9052 10.3008 23.7539 6.69991 20.5245 4.66692L18.9263 7.20575ZM22.9052 14.4052C22.9052 19.0997 19.0997 22.9052 14.4052 22.9052V25.9052C20.7565 25.9052 25.9052 20.7565 25.9052 14.4052H22.9052ZM14.4052 22.9052C11.3744 22.9052 8.71265 21.32 7.20575 18.9263L4.66693 20.5245C6.69991 23.7539 10.3008 25.9052 14.4052 25.9052V22.9052ZM8.40524 16.9052C8.01912 16.9052 7.63976 16.8796 7.26864 16.8301L6.87194 19.8037C7.37422 19.8707 7.88609 19.9052 8.40524 19.9052V16.9052ZM7.20575 18.9263C7.26799 19.0251 7.31491 19.1794 7.2955 19.3532C7.27766 19.513 7.21201 19.6222 7.16181 19.6813C7.07466 19.7839 6.97003 19.8168 6.87194 19.8037L7.26864 16.8301C6.33009 16.7049 5.43262 17.0833 4.87568 17.7387C4.28244 18.4369 4.04074 19.5298 4.66693 20.5245L7.20575 18.9263ZM19.8037 6.87194C19.8168 6.97003 19.7839 7.07466 19.6813 7.16181C19.6222 7.21201 19.513 7.27766 19.3532 7.2955C19.1794 7.31491 19.0251 7.26799 18.9263 7.20575L20.5245 4.66692C19.5298 4.04074 18.4369 4.28244 17.7387 4.87568C17.0833 5.43262 16.7049 6.33009 16.8301 7.26864L19.8037 6.87194Z'
            fill='#5f6479'
            mask='url(#path-1-inside-1_15_5)'
          />
        </svg>
      )}
    </div>
  );
};

export default MoonIcon;
