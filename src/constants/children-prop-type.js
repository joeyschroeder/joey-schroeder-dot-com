import PropTypes from 'prop-types';

export const CHILDREN_PROP_TYPE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);
