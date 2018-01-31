import React from 'react';
import styles from './HtmlContent.module.scss';

const IntroParagraph = ({ children }) => (
  <div className={styles.introParagraph}>{children}</div>
);

export default IntroParagraph;
