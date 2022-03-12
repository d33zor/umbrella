import * as React from 'react';

type Props = {
  svgClass?: string;
  parentClass?: string;
};

const AirIcon = ({ svgClass, parentClass }: Props) => (
  <div className={parentClass}>
    <svg
      width={24}
      height={24}
      xmlns='http://www.w3.org/2000/svg'
      className={svgClass}
    >
      <rect x='2.72727' y='8' width='7.27273' height='2' />
      <circle cx='3' cy='9' r='1' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.5 10C11.433 10 13 8.433 13 6.5C13 4.567 11.433 3 9.5 3C7.73676 3 6.27806 4.30385 6.03544 6H8.08535C8.29127 5.4174 8.84689 5 9.5 5C10.3284 5 11 5.67157 11 6.5C11 7.15311 10.5826 7.70873 10 7.91465V8H9.5H6.33682C6.89855 9.18247 8.1038 10 9.5 10Z'
      />
      <circle cx='7' cy='6' r='1' />
      <rect
        width='7.27273'
        height='2'
        transform='matrix(1 0 0 -1 2.72727 16)'
      />
      <circle r='1' transform='matrix(1 0 0 -1 3 15)' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.5 14C11.433 14 13 15.567 13 17.5C13 19.433 11.433 21 9.5 21C7.73677 21 6.27806 19.6961 6.03545 18H8.08535C8.29127 18.5826 8.84689 19 9.5 19C10.3284 19 11 18.3284 11 17.5C11 16.8469 10.5826 16.2913 10 16.0854V16H9.5H6.33682C6.89855 14.8175 8.1038 14 9.5 14Z'
      />
      <circle r='1' transform='matrix(1 0 0 -1 7 18)' />
      <rect x='3' y='11' width='15' height='2' />
      <circle cx='3' cy='12' r='1' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5 13C19.433 13 21 11.433 21 9.5C21 7.567 19.433 6 17.5 6C15.7368 6 14.2781 7.30385 14.0354 9H16.0854C16.2913 8.4174 16.8469 8 17.5 8C18.3284 8 19 8.67157 19 9.5C19 10.1531 18.5826 10.7087 18 10.9146V11H17.5H14.3368C14.8985 12.1825 16.1038 13 17.5 13Z'
      />
      <circle cx='15' cy='9' r='1' />
    </svg>
  </div>
);

export default AirIcon;
