import React from 'react';
import GatsbyLink from 'gatsby-link';
import styles from './HtmlContent.module.scss';

export const Link = ({ to, children }) => (
  <GatsbyLink to={to} className={styles.link}>
    {children}
  </GatsbyLink>
);

export const ExternalLink = ({ to, children }) => (
  <a href={to} className={styles.link}>
    {children}
  </a>
);

export const ActionLink = ({ action, children }) => (
  <button onClick={action} className={styles.buttonLink}>
    {children}
  </button>
);

export default Link;
