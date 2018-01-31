import React from 'react';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import success from 'cultureamp-style-guide/icons/success-white.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation-white.svg';
import styles from './TipCard.module.scss';

const TipCard = ({ title, type, children }) => {
  const icon = type === 'tip' ? success : exclamation,
    iconColor = type === 'tip' ? 'tipIcon' : 'warningIcon';
  return (
    <div className={styles.cardWithHeader}>
      <div className={styles.cardHeader}>
        {icon && (
          <span className={classNames(styles.iconWrapper, styles[iconColor])}>
            <Icon icon={icon} role="presentation" />
          </span>
        )}
        <span className={styles.headerText}>{title}</span>
      </div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default TipCard;
