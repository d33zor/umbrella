import * as React from 'react';

type Props = {
  svgClass?: string;
  parentClass?: string;
};

const SearchIcon = ({ svgClass, parentClass }: Props) => (
  <button type='submit' className={parentClass} aria-label='Search'>
    <svg
      width={20}
      height={20}
      xmlns='http://www.w3.org/2000/svg'
      className={svgClass}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm0-2A7 7 0 1 0 9 2a7 7 0 0 0 0 14Z'
      />
      <path d='M14 16.414 15.414 15l2.828 2.828-1.414 1.414z' />
    </svg>
  </button>
);

export default SearchIcon;
