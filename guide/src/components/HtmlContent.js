import React from 'react';
import styles from './HtmlContent.module.scss';

const HtmlContent = ({ children }) => (
  <div className={styles.htmlContent}>{children}</div>
);

export default HtmlContent;
