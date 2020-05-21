import PropTypes from 'prop-types';
import React from 'react';
import { NavigationItem } from '../navigation-item/navigation-item.component';
import styles from './navigation.style.scss';

export const Navigation = (props) => {
  const { active } = props;

  return (
    <div className={styles.root}>
      <NavigationItem
        active={active}
        href="./static/schroeder-joseph-web-developer-resume.pdf"
        iconName="fas fa-file-pdf"
      >
        Résumé
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-linkedin"
        href="https://www.linkedin.com/in/joeyschroeder"
      >
        LinkedIn
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-github"
        href="https://github.com/joeyschroeder"
      >
        GitHub
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-npm"
        href="https://www.npmjs.com/~joeyschroeder"
      >
        NPM
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-bandcamp"
        href="https://joeyschroeder.bandcamp.com"
      >
        Bandcamp
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-bandcamp"
        href="https://theapacherevolver.bandcamp.com"
      >
        The Apache Revolver
      </NavigationItem>
      <NavigationItem
        active={active}
        iconName="fab fa-bandcamp"
        href="https://computerjones.bandcamp.com"
      >
        Computer Jones
      </NavigationItem>
    </div>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
};

Navigation.defaultProps = {
  active: false,
};
