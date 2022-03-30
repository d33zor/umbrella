import * as React from 'react';

type Props = {
  svgClass?: string;
  size?: number;
};

const CrossIcon = ({ svgClass, size }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || 24}
    height={size || 24}
    viewBox='0 0 24 24'
    className={svgClass}
    aria-hidden='true'
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
);

export default CrossIcon;
