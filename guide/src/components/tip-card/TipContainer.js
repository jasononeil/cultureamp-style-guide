import React from 'react';
import styles from './TipCard.module.scss';
import htmlStyles from '../HtmlContent.module.scss';

const TipContainer = ({ children }) => (
  <div className={`${styles.tipsContainer}`}>{children}</div>
);

export default TipContainer;
