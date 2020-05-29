import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Icon } from '../icon/icon.component';
import styles from './navigation-item.style.scss';

export class NavigationItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    download: PropTypes.bool,
    href: PropTypes.string,
    iconName: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    download: undefined,
    href: '',
    iconName: '',
    title: '',
  };

  getStyle() {
    const { active } = this.props;

    const translateX = active ? 0 : '100%';
    const transform = `translateX(${translateX})`;

    const style = { transform };

    return style;
  }

  render() {
    const { download, href, iconName, title } = this.props;
    const style = this.getStyle();

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
}
