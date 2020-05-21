/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './overlay.style.scss';

export class Overlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    onClick: null,
  };

  getStyle() {
    const { active } = this.props;

    const opacity = active ? 1 : 0;
    const pointerEvents = active ? 'auto' : 'none';

    const style = { opacity, pointerEvents };

    return style;
  }

  render() {
    const { onClick } = this.props;
    const style = this.getStyle();

    return <div className={styles.root} style={style} onClick={onClick} />;
  }
}
