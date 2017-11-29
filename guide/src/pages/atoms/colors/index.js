import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.scss';
import colorCardStyles from './colorCard.module.scss';

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

const ColorCard = ({ name }) => {
  var colorClassName = colorCardStyles[name.toLowerCase()];
  return (
    <div className={colorCardStyles.colorCard}>
      <h3>{name}</h3>
      <h4 className={colorCardStyles.subHeader}>Tint &amp; Shade</h4>
      <div className={`${colorCardStyles.colorBlock} ${colorClassName}`}>
        Color
      </div>
    </div>
  );
};

export default Page;
