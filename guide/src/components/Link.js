import React from 'react';
import GatsbyLink from 'gatsby-link';
import styles from './HtmlContent.module.scss';

export const Link = props => <GatsbyLink {...props} className={styles.link} />;

export const ExternalLink = props => (
  <a {...props} href={props.to} className={styles.link} />
);

export const ActionLink = props => (
  <a
    {...props}
    href="javascript:void(0)"
    onClick={props.action}
    className={styles.link}
  />
);

export default Link;
