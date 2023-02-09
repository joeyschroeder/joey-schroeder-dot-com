import 'normalize.css/normalize.css';
import '../../styles/index.scss';

import React, { useState } from 'react';

import { Navigation } from '../navigation/navigation.component';
import { Splash } from '../splash/splash.component';
import styles from './app.style.scss';

export function App() {
  const [navActive, setNavActive] = useState(false);
  const toggleNavigation = () => setNavActive(!navActive);

  return (
    <div className={styles.root}>
      <Splash toggleNavigation={toggleNavigation} active={!navActive} />
      <Navigation active={navActive} />
    </div>
  );
}
