import * as React from 'react';

type Props = {
  parentClass?: string;
  svgSize?: number;
};

const SunAndCloudIcon = ({ parentClass, svgSize }: Props) => (
  <div className={parentClass}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={svgSize || '27'}
      height={svgSize || '27'}
      viewBox='0 0 28 25'
      fill='none'
    >
      <ellipse
        cx='18.5'
        cy='10'
        rx='5.27778'
        ry='5.55556'
        fill='url(#paint0_linear_8_40)'
      />
      <rect
        x='17.4444'
        width='1.40741'
        height='2.96296'
        rx='0.703704'
        fill='#FF8E38'
      />
      <rect
        x='11.8148'
        y='8.88889'
        width='1.48148'
        height='2.81481'
        rx='0.740741'
        transform='rotate(90 11.8148 8.88889)'
        fill='#FF8E38'
      />
      <rect
        x='28'
        y='8.88889'
        width='1.48148'
        height='2.81481'
        rx='0.740741'
        transform='rotate(90 28 8.88889)'
        fill='#FF8E38'
      />
      <rect
        width='1.44492'
        height='2.88984'
        rx='0.72246'
        transform='matrix(0.688749 0.724999 -0.688749 0.724999 25.0645 2.22223)'
        fill='#FF8E38'
      />
      <rect
        width='1.44492'
        height='2.88984'
        rx='0.72246'
        transform='matrix(0.688749 0.724999 -0.688749 0.724999 13.1015 14.8148)'
        fill='#FF8E38'
      />
      <rect
        width='1.44492'
        height='2.88984'
        rx='0.72246'
        transform='matrix(0.688749 -0.724999 0.688749 0.724999 11.1111 3.26978)'
        fill='#FF8E38'
      />
      <rect
        width='1.44492'
        height='2.88984'
        rx='0.72246'
        transform='matrix(0.688749 -0.724999 0.688749 0.724999 23.0741 15.8624)'
        fill='#FF8E38'
      />
      <rect
        x='17.4444'
        y='17.037'
        width='1.40741'
        height='2.96296'
        rx='0.703704'
        fill='#FF8E38'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.8427 14.539C21.6977 14.5782 24 16.9049 24 19.7692C24 22.6581 21.6581 25 18.7692 25H5.23077C2.3419 25 0 22.6581 0 19.7692C0 17.352 1.63956 15.3178 3.86724 14.718C4.39564 10.9192 7.55274 8 11.3684 8C15.124 8 18.2415 10.8279 18.8427 14.539Z'
        fill='url(#paint1_linear_8_40)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_8_40'
          x1='21.6667'
          y1='14.4445'
          x2='14.5702'
          y2='6.28355'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF8E38' />
          <stop offset='1' stopColor='#FFBE50' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_8_40'
          x1='12'
          y1='8'
          x2='12'
          y2='25'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9EAF7' />
          <stop offset='1' stopColor='#BED5E7' />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default SunAndCloudIcon;
