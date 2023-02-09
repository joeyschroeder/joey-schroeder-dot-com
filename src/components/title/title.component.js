import React from 'react';
import styles from './title.style.scss';

export function Title() {
  return (
    <h2 className={styles.root}>
      <span className={styles.content}>Developer//</span>
      <span className={styles.content}>Designer</span>
    </h2>
  );
}
