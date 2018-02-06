import React from 'react';
import classNames from 'classnames';
import GatsbyLink from 'gatsby-link';
import styles from './HtmlContent.module.scss';
import iconStyles from 'cultureamp-style-guide/components/Icon/Icon.module.scss';

export const Link = ({ to, children }) => (
  <GatsbyLink
    to={to}
    className={classNames(styles.link, iconStyles.interactiveIconWrapper)}
  >
    {children}
  </GatsbyLink>
);

export const ExternalLink = ({ to, children }) => (
  <a
    href={to}
    className={classNames(styles.link, iconStyles.interactiveIconWrapper)}
  >
    {children}
  </a>
);

export const ActionLink = ({ action, children }) => (
  <button
    onClick={action}
    className={classNames(styles.buttonLink, iconStyles.interactiveIconWrapper)}
    // Prevent the element from being left in an "active" state after the click is complete.
    onMouseDown={e => e.preventDefault()}
  >
    {children}
  </button>
);

export default Link;
