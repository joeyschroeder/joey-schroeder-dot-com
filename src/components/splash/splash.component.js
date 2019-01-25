import React, { Component } from 'react';

import { Author } from '../author/author.component';
import { Copyright } from '../copyright/copyright.component';
import { NavigationToggle } from '../navigation-toggle/navigation-toggle.component';
import { Overlay } from '../overlay/overlay.component';
import PropTypes from 'prop-types';
import { Stripes } from '../stripes/stripes.component';
import { Title } from '../title/title.component';
import styles from './splash.style.scss';

export class Splash extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleNavigation: PropTypes.func
  };

  static defaultProps = {
    active: true,
    toggleNavigation: null
  };

  getStyle() {
    const { active } = this.props;

    const translateX = active ? 0 : '-50%';
    const transform = `translateX(${translateX})`;

    const style = { transform };

    return style;
  }

  render() {
    const { active, toggleNavigation } = this.props;
    const style = this.getStyle();

    return (
      <div className={styles.root} style={style}>
        <Overlay active={!active} onClick={toggleNavigation} />
        <NavigationToggle onClick={toggleNavigation} />
        <div className={styles.section}>
          <div>
            <Author />
            <Title />
          </div>
        </div>
        <div className={styles.section}>
          <Stripes />
          <Copyright />
        </div>
      </div>
    );
  }
}
