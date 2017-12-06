import React from 'react';
import { ExternalLink } from 'components/Elements';
import styles from './BradFrostQuote.module.scss';

const BradFrostQuote = ({ children, link }) => (
  <blockquote className={styles.quote}>
    {children}
    <cite>
      - Brad Frost, <ExternalLink to={link}>Atomic Design</ExternalLink>
    </cite>
  </blockquote>
);

export default BradFrostQuote;
