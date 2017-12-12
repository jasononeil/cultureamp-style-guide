import React from 'react';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import styles from './Card.module.scss';

const Card = ({ title, icon, iconColor, children }) => {
  if (!title) {
    return <div className={styles.card}>{children}</div>;
  }
  const header = (
    <div className={styles.cardHeader}>
      {icon && (
        <span
          className={classNames({
            [styles.iconWrapper]: true,
            [styles[iconColor]]: iconColor,
          })}
        >
          <Icon icon={icon} role="presentation" />
        </span>
      )}
      {title}
    </div>
  );
  return (
    <div className={styles.cardWithHeader}>
      {title && header}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default Card;
