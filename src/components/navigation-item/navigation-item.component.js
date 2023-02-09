import React from 'react';

import PropTypes from 'prop-types';
import { Icon } from '../icon/icon.component';
import styles from './navigation-item.style.scss';

export function NavigationItem(props) {
  const { active, download, href, iconName, title } = props;

  const translateX = active ? 0 : '100%';
  const transform = `translateX(${translateX})`;
  const style = { transform };

  return (
    <a
      className={styles.root}
      download={download}
      href={href}
      rel="noopener noreferrer"
      style={style}
      target="_blank"
      title={title}
    >
      <div style={{ marginRight: '1rem' }}>
        <Icon className={iconName} />
      </div>
      <div style={{ flex: 1 }}>{title}</div>
    </a>
  );
}

NavigationItem.propTypes = {
  active: PropTypes.bool,
  download: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconName: PropTypes.string,
  title: PropTypes.string,
};

NavigationItem.defaultProps = {
  active: false,
  download: undefined,
  href: '',
  iconName: '',
  title: '',
};
