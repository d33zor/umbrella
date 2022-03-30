import * as React from 'react';

type Props = {
  parentClass?: string;
  svgSize?: number;
};

const RainIcon = ({ parentClass, svgSize }: Props) => (
  <div className={parentClass}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={svgSize || '27'}
      height={svgSize || '27'}
      viewBox='0 0 25 27'
      fill='none'
      aria-hidden='true'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.8427 6.53896C21.6977 6.57824 24 8.90486 24 11.7692C24 14.6581 21.6581 17 18.7692 17H5.23077C2.3419 17 0 14.6581 0 11.7692C0 9.35205 1.63956 7.31781 3.86724 6.71795C4.39564 2.91917 7.55274 0 11.3684 0C15.124 0 18.2415 2.82786 18.8427 6.53896Z'
        fill='url(#paint0_linear_8_46)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.0656 14.1097C9.49569 11.2182 11.9888 9 15 9C17.973 9 20.441 11.1623 20.917 14H21C23.2091 14 25 15.7909 25 18C25 20.2091 23.2091 22 21 22H10C7.79086 22 6 20.2091 6 18C6 16.1126 7.30718 14.5305 9.0656 14.1097Z'
        fill='url(#paint1_linear_8_46)'
      />
      <rect
        x='3.5'
        y='18'
        width='1'
        height='5'
        rx='0.5'
        transform='rotate(30 3.5 18)'
        fill='#6E89CD'
      />
      <rect
        x='6.5'
        y='22'
        width='1'
        height='5'
        rx='0.5'
        transform='rotate(30 6.5 22)'
        fill='#6E89CD'
      />
      <rect
        x='12.5'
        y='22'
        width='1'
        height='5'
        rx='0.5'
        transform='rotate(30 12.5 22)'
        fill='#6E89CD'
      />
      <rect
        x='18.5'
        y='22'
        width='1'
        height='5'
        rx='0.5'
        transform='rotate(30 18.5 22)'
        fill='#6E89CD'
      />
      <rect
        x='23.5'
        y='22'
        width='1'
        height='5'
        rx='0.5'
        transform='rotate(30 23.5 22)'
        fill='#6E89CD'
      />
      <defs>
        <linearGradient
          id='paint0_linear_8_46'
          x1='12'
          y1='0'
          x2='12'
          y2='17'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9EAF7' />
          <stop offset='1' stopColor='#BED5E7' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_8_46'
          x1='15.5'
          y1='9'
          x2='15.5'
          y2='22'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9EAF7' />
          <stop offset='1' stopColor='#BED5E7' />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default RainIcon;
