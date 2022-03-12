import React from 'react';
import styles from '../styles/LoadingTemplate.module.css';

type Props = {
  style?: any;
  spinnerStyle?: any;
};

const LoadingTemplate = ({ style, spinnerStyle }: Props) => {
  return (
    <div className={styles.Template} style={style}>
      <div className={styles.Spinner}>
        <div style={spinnerStyle}></div>
        <div style={spinnerStyle}></div>
      </div>
    </div>
  );
};

export default LoadingTemplate;
