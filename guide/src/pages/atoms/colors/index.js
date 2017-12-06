import React from 'react';
import { Link, ExternalLink, Heading1, Heading2 } from 'components/Elements';
import styles from './index.module.scss';
import colorCardStyles from './colorCard.module.scss';

const Page = () => (
  <div>
    <Heading1>Colors</Heading1>
    <p className={styles.intro}>
      Our color palette is built with our core principles and guidelines as its
      foundation. We are committed to complying with{' '}
      <ExternalLink to="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
        AA standard contrast ratios
      </ExternalLink>.
    </p>
    <div className={styles.cardContainer}>
      <Heading2 className={styles.gridHeader}>Primary Colors</Heading2>
      <ColorCard name="Coral" />
      <ColorCard name="Paper" />
      <ColorCard name="Ink" />
      <Heading2 className={styles.gridHeader}>Secondary Colors</Heading2>
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
