import React from 'react';
import Link from 'gatsby-link';
import ColorCard from './colorCard.js';
import styles from './index.module.scss';

const Page = () => (
  <div>
    <h1>Colors</h1>
    <p className="intro">
      Our color palette is built with our core principles and guidelines as its
      foundation. We are committed to complying with{' '}
      <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
        AA standard contrast ratios
      </a>.
    </p>
    <div className={styles.cardContainer}>
      <h2 className={styles.gridHeader}>Primary Colors</h2>
      <ColorCard name="Coral" />
      <ColorCard name="Paper" />
      <ColorCard name="Ink" />
      <h2 className={styles.gridHeader}>Secondary Colors</h2>
      <ColorCard name="Seedling" />
      <ColorCard name="Ocean" />
      <ColorCard name="Lapis" />
      <ColorCard name="Wisteria" />
      <ColorCard name="Peach" />
      <ColorCard name="Yuzu" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Page;
