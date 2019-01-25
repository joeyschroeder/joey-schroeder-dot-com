import React from 'react';
import { Stripe } from '../stripe/stripe.component';
import styles from './stripes.style.scss';

export const Stripes = () => (
  <div className={styles.root}>
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
  </div>
);
