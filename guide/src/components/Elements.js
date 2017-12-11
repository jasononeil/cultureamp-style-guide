import React from 'react';
import GatsbyLink from 'gatsby-link';
import classNames from 'classnames';
import styles from './Elements.module.scss';

export const Heading1 = props => (
  <h1 {...props} className={classNames(styles.h1, props.className)} />
);

export const Heading2 = props => (
  <h2 {...props} className={classNames(styles.h2, props.className)} />
);

export const Heading3 = props => (
  <h3 {...props} className={classNames(styles.h3, props.className)} />
);

export const Link = props => (
  <GatsbyLink {...props} className={classNames(styles.link, props.className)} />
);

export const ExternalLink = props => (
  <a
    {...props}
    href={props.to}
    className={classNames(styles.link, props.className)}
  />
);

export const ActionLink = props => (
  <a
    {...props}
    href="javascript:void(0)"
    onClick={props.action}
    className={classNames(styles.link, props.className)}
  />
);
