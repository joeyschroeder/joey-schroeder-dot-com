import React from 'react';
import styles from './title.style.scss';

export const Title = () => (
  <h2 className={styles.root}>
    <span className={styles.content}>Designer//</span>
    <span className={styles.content}>Developer</span>
  </h2>
);
