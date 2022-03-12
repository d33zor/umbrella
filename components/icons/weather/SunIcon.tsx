import * as React from 'react';

type Props = {
  parentClass?: string;
  svgSize?: number;
};

const SunIcon = ({ parentClass, svgSize }: Props) => (
  <div className={parentClass}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={svgSize || '27'}
      height={svgSize || '27'}
      viewBox='0 0 27 27'
      fill='none'
    >
      <circle cx='13.5' cy='13.5' r='7.5' fill='url(#paint0_linear_1_17)' />
      <rect x='12' width='2' height='4' rx='1' fill='#FF8E38' />
      <rect
        x='4'
        y='12'
        width='2'
        height='4'
        rx='1'
        transform='rotate(90 4 12)'
        fill='#FF8E38'
      />
      <rect
        x='27'
        y='12'
        width='2'
        height='4'
        rx='1'
        transform='rotate(90 27 12)'
        fill='#FF8E38'
      />
      <rect
        x='22.8284'
        y='3'
        width='2'
        height='4'
        rx='1'
        transform='rotate(45 22.8284 3)'
        fill='#FF8E38'
      />
      <rect
        x='5.82843'
        y='20'
        width='2'
        height='4'
        rx='1'
        transform='rotate(45 5.82843 20)'
        fill='#FF8E38'
      />
      <rect
        x='3'
        y='4.41422'
        width='2'
        height='4'
        rx='1'
        transform='rotate(-45 3 4.41422)'
        fill='#FF8E38'
      />
      <rect
        x='20'
        y='21.4142'
        width='2'
        height='4'
        rx='1'
        transform='rotate(-45 20 21.4142)'
        fill='#FF8E38'
      />
      <rect x='12' y='23' width='2' height='4' rx='1' fill='#FF8E38' />
      <defs>
        <linearGradient
          id='paint0_linear_1_17'
          x1='18'
          y1='19.5'
          x2='8.5'
          y2='8'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF8E38' />
          <stop offset='1' stopColor='#FFBE50' />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default SunIcon;
