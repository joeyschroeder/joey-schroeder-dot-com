import React from 'react';
import styles from './copyright.style.scss';

export function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.root}>
      Copyright © {year}
      {'. '}All Rights Totally Reserved.
    </div>
  );
}
