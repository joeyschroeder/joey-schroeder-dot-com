import React, { Component } from 'react';

import { CHILDREN_PROP_TYPE } from '../../constants/children-prop-type';
import { Icon } from '../icon/icon.component';
import PropTypes from 'prop-types';
import styles from './navigation-item.style.scss';

export class NavigationItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: CHILDREN_PROP_TYPE,
    href: PropTypes.string,
    iconName: PropTypes.string
  };

  static defaultProps = {
    active: false,
    children: null,
    href: '',
    iconName: ''
  };

  getStyle() {
    const { active } = this.props;

    const translateX = active ? 0 : '100%';
    const transform = `translateX(${translateX})`;

    const style = { transform };

    return style;
  }

  render() {
    const { href, children, iconName } = this.props;
    const style = this.getStyle();

    return (
      <a className={styles.root} style={style} href={href} target="_blank" rel="noopener noreferrer">
        <div style={{ marginRight: '1rem' }}>
          <Icon className={iconName} />
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </a>
    );
  }
}
