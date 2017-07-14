import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';
import accentsWarning from 'cultureamp-style-guide/icons/informational/exclamation.svg';

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

  if (otherProps.inheritSize) {
    return (
      <div style={{ width: '100px', height: '100px' }}>
        <Icon icon={svgIcon} {...otherProps} />
      </div>
    );
  }

  return <Icon icon={svgIcon} {...otherProps} />;
}

Demo.propTypes = {
  ...Icon.propTypes,
  icon: PropTypes.string.isRequired,
};
