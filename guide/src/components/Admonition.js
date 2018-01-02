import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import success from 'cultureamp-style-guide/icons/success.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation.svg';
import styles from './Admonition.module.scss';

const Admonition = ({ type, children }) => {
  const icon = type === 'tip' ? success : exclamation;
  return (
    <div className={classNames(styles.admonition, styles[type])}>
      <span className={styles.iconWrapper}>
        <Icon icon={icon} role="img" title={type} inheritSize={true} />
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Admonition.PropTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['tip', 'warning']),
};

export default Admonition;
