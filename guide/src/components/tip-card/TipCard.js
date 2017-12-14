import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import success from 'cultureamp-style-guide/icons/success.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation.svg';
import MarkdownContent from '../MarkdownContent';
import styles from './TipCard.module.scss';

const TipCard = ({ title, type, content }) => {
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
        {title}
      </div>
      <div className={styles.cardBody}>
        <MarkdownContent content={content} />
      </div>
    </div>
  );
};

export default TipCard;
