import React from 'react';
import GatsbyLink from 'gatsby-link';
import classNames from 'classnames';
import styles from './HtmlContent.module.scss';

const HtmlContent = ({ children }) => (
  <div className={styles.htmlContent}>{children}</div>
);

export default HtmlContent;
