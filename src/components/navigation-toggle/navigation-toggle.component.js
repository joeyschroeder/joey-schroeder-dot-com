import PropTypes from 'prop-types';
import React from 'react';
import styles from './navigation-toggle.style.scss';

export function NavigationToggle(props) {
  const { onClick } = props;

  return (
    <button className={styles.root} onClick={onClick} type="button">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </button>
  );
}

NavigationToggle.propTypes = {
  onClick: PropTypes.func,
};

NavigationToggle.defaultProps = {
  onClick: null,
};
