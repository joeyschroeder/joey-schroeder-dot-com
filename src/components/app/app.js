import 'normalize.css/normalize.css';
import '../../styles/index.scss';

import React, { Component } from 'react';

import { Navigation } from '../navigation/navigation.component';
import { Splash } from '../splash/splash.component';
import styles from './app.style.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationActive: false,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  componentDidMount() {
    // When the app.js component mounts it fires an event called 'appReady'
    const event = new CustomEvent('appReady', {
      bubbles: true,
      cancelable: false,
    });

    document.dispatchEvent(event);
  }

  toggleNavigation() {
    const { navigationActive } = this.state;
    this.setState({ navigationActive: !navigationActive });
  }

  render() {
    const { navigationActive } = this.state;

    return (
      <div className={styles.root}>
        <Splash
          toggleNavigation={this.toggleNavigation}
          active={!navigationActive}
        />
        <Navigation active={navigationActive} />
      </div>
    );
  }
}
