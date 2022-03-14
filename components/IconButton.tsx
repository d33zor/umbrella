import React, { MouseEventHandler, ReactInstance } from 'react';
import styles from '../styles/IconButton.module.css';

type Props = {
  className: React.ReactNode;
  svg: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  label: string;
};

const IconButton = ({ className, svg, handleClick, text, label }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.Button} ${className ? className : ''}`}
      aria-label={label}
    >
      {svg}
      {text}
    </button>
  );
};

export default IconButton;
