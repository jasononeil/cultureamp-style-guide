import React from 'react';
import GatsbyLink from 'gatsby-link';
import styles from './Elements.module.scss';

function joinClassNames() {
  const args = Array.from(arguments);
  return args.filter(n => n).join(' ');
}

export const Heading1 = props => (
  <h1 {...props} className={joinClassNames(styles.h1, props.className)} />
);

export const Heading2 = props => (
  <h2 {...props} className={joinClassNames(styles.h2, props.className)} />
);

export const Heading3 = props => (
  <h3 {...props} className={joinClassNames(styles.h3, props.className)} />
);

export const Link = props => (
  <GatsbyLink
    {...props}
    className={joinClassNames(styles.link, props.className)}
  />
);

export const ExternalLink = props => (
  <a
    {...props}
    href={props.to}
    className={joinClassNames(styles.link, props.className)}
  />
);
