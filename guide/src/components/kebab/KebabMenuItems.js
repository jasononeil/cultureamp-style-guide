import PropTypes from 'prop-types';
import React from 'react';
import styles from './KebabMenu.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';

export const MenuItemLink = props => {
  return (
    <div className={styles.menuItemLink}>
      <a href={props.link}>
        <span className={styles.menuItem__title}>{props.text}</span>
      </a>
    </div>
  );
};

export const MenuItemAction = props => {
  const handleOnClick = event => {
    if (props.hideKebabMenu) {
      props.hideKebabMenu();
    }
    props.action(event);
  };

  return (
    <div className={styles.menuItemAction} onClick={handleOnClick}>
      <a>
        <span className={styles.menuItem__title}>{props.text}</span>
        <span className={styles.menuItem__icon}>
          <Icon icon={props.icon} role="presentation" />
        </span>
      </a>
    </div>
  );
};

MenuItemLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.node,
};

MenuItemAction.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
  icon: PropTypes.object,
  hideKebabMenu: PropTypes.func,
};
