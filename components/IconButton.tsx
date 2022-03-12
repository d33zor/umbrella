import React, { MouseEventHandler, ReactInstance } from 'react';
import styles from '../styles/IconButton.module.css';

type Props = {
  className: React.ReactNode;
  svg: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
};

const IconButton = ({ className, svg, handleClick, text }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.Button} ${className ? className : ''}`}
    >
      {svg}
      {text}
    </button>
  );
};

export default IconButton;
