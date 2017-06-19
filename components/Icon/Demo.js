import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';
import accentsWarning from './accents-warning.svg';

export default function Demo(props) {
  const { icon, ...otherProps } = props;
  let svgIcon;

  switch (icon) {
    case 'accents-warning':
      svgIcon = accentsWarning;
      break;
    default:
      svgIcon = undefined;
  }

  return <Icon icon={svgIcon} {...otherProps} />;
}

Demo.propTypes = {
  ...Icon.propTypes,
  icon: PropTypes.string.isRequired,
};
