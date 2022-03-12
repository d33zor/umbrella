import * as React from 'react';

type Props = {
  parentClass?: string;
  svgSize?: number;
};

const FogIcon = ({ parentClass, svgSize }: Props) => (
  <div className={parentClass}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={svgSize || '27'}
      height={svgSize || '27'}
      viewBox='0 0 30 30'
      fill='none'
    >
      <rect width='30' height='30' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H20C20.5523 9 21 8.55228 21 8C21 7.44772 20.5523 7 20 7H11ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H6ZM9 14C9 13.4477 9.44772 13 10 13H26C26.5523 13 27 13.4477 27 14C27 14.5523 26.5523 15 26 15H10C9.44772 15 9 14.5523 9 14ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H4ZM5 20C5 19.4477 5.44772 19 6 19H24C24.5523 19 25 19.4477 25 20C25 20.5523 24.5523 21 24 21H6C5.44772 21 5 20.5523 5 20ZM9 22C8.44772 22 8 22.4477 8 23C8 23.5523 8.44772 24 9 24H21C21.5523 24 22 23.5523 22 23C22 22.4477 21.5523 22 21 22H9Z'
        fill='url(#paint0_linear_9_7)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_9_7'
          x1='15'
          y1='7'
          x2='15'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9EAF7' />
          <stop offset='1' stopColor='#BED5E7' />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default FogIcon;
