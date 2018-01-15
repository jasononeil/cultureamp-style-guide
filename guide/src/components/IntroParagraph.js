import React from 'react';
import styles from './HtmlContent.module.scss';

const IntroParagraph = ({ children }) => (
  <p className={styles.introParagraph}>{children}</p>
);

export default IntroParagraph;
