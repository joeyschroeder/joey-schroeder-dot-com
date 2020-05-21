import '@fortawesome/fontawesome-free/css/all.css';

import PropTypes from 'prop-types';
import React from 'react';

export const Icon = (props) => {
  const { className } = props;
  return <i className={className} aria-hidden="true" />;
};

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: 'fas fa-file-pdf',
};
