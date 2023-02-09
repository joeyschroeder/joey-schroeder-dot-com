import React from 'react';

import PropTypes from 'prop-types';
import styles from './overlay.style.scss';

export function Overlay(props) {
  const { active, onClick } = props;

  const opacity = active ? 1 : 0;
  const pointerEvents = active ? 'auto' : 'none';
  const style = { opacity, pointerEvents };

  return <div className={styles.root} style={style} onClick={onClick} />;
}

Overlay.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Overlay.defaultProps = {
  active: false,
  onClick: null,
};
