import PropTypes from 'prop-types';
import React from 'react';
import { NavigationItem } from '../navigation-item/navigation-item.component';
import styles from './navigation.style.scss';
import resumePdf from '../../assets/pdfs/schroeder-joey-web-developer-designer-resume.pdf';

export const Navigation = (props) => {
  const { active } = props;

  return (
    <div className={styles.root}>
      <NavigationItem
        active={active}
        download="schroeder-joey-developer-designer-resume.pdf"
        href={resumePdf}
        iconName="fas fa-file-pdf"
        title="Résumé"
      />
      <NavigationItem
        active={active}
        href="https://www.linkedin.com/in/joeyschroeder"
        iconName="fab fa-linkedin"
        title="LinkedIn"
      />
      <NavigationItem
        active={active}
        href="https://github.com/joeyschroeder"
        iconName="fab fa-github"
        title="GitHub"
      />
      <NavigationItem
        active={active}
        href="https://www.npmjs.com/~joeyschroeder"
        iconName="fab fa-npm"
        title="NPM"
      />
      <NavigationItem
        active={active}
        href="https://joeyschroeder.bandcamp.com"
        iconName="fab fa-bandcamp"
        title="Bandcamp"
      />
      <NavigationItem
        active={active}
        href="https://theapacherevolver.bandcamp.com"
        iconName="fab fa-bandcamp"
        title="The Apache Revolver"
      />
      <NavigationItem
        active={active}
        href="https://computerjones.bandcamp.com"
        iconName="fab fa-bandcamp"
        title="Computer Jones"
      />
    </div>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
};

Navigation.defaultProps = {
  active: false,
};
