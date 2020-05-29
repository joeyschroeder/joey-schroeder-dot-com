import PropTypes from 'prop-types';
import React from 'react';
import { NavigationItem } from '../navigation-item/navigation-item.component';
import styles from './navigation.style.scss';
import { NAVIGATION_ITEMS } from '../../constants/navigation-items';

export const Navigation = (props) => {
  const { active } = props;

  const navigationItems = NAVIGATION_ITEMS.map((navigatonItem) => {
    const { download, href, iconName, title } = navigatonItem;

    return (
      <NavigationItem
        active={active}
        download={download}
        href={href}
        iconName={iconName}
        key={title}
        title={title}
      />
    );
  });

  return <div className={styles.root}>{navigationItems}</div>;
};

Navigation.propTypes = {
  active: PropTypes.bool,
};

Navigation.defaultProps = {
  active: false,
};
