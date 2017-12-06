import React from 'react';
import { Link, ExternalLink, Heading1, Heading2 } from 'components/Elements';
import joinClassNames from 'util/joinClassNames.js';
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
      <Heading2 className={styles.gridHeader}>Tertiary Colors</Heading2>
      <ColorCard name="Postive-Delta" />
      <ColorCard name="Negative-Delta" />
      <ColorCard name="Stone" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
);

class ColorCard extends React.Component {
  render() {
    const { name } = this.props;
    var colorClassName = colorCardStyles[name.toLowerCase()];
    return (
      <div>
        <div className={colorCardStyles.colorCard}>
          <h3>{name}</h3>
          <h4>Tint &amp; Shade</h4>
          {this.renderColorBlocks(true)}
        </div>
      </div>
    );
  }

  renderColorBlocks(showVariations) {
    const colorName = this.props.name;
    const mainBlock = this.renderBlock(colorName);
    if (!showVariations || colorName === 'Stone') {
      return mainBlock;
    }
    const variations = showVariations
      ? [90, 70, 50, 30, 10, 0, -10, -20, -30, -40, -50]
      : [0];
    return variations.map(amount => this.renderBlock(colorName, amount));
  }

  renderBlock(color, amount) {
    let colorClassName = color.toLowerCase(),
      isHalfBlock = false,
      label = `$ca-palette-${colorClassName}`;
    if (amount) {
      let shift = amount > 0 ? 'tint' : 'shade',
        absAmount = Math.abs(amount);
      label = `add-${shift}($ca-palette-${color.toLowerCase()}, ${absAmount}%)`;
      colorClassName = `${colorClassName}-${shift}-${absAmount}`;
      isHalfBlock = true;
    }

    const classes = joinClassNames([
      colorCardStyles['colorBlock'],
      colorCardStyles[colorClassName],
      isHalfBlock && colorCardStyles['colorBlockHalf'],
      this.shouldUseWhiteText(color, amount) && colorCardStyles['whiteText'],
    ]);

    return <div className={classes}>{label}</div>;
  }

  shouldUseWhiteText(color, amount) {
    const lastWhite = {
      coral: 10,
      paper: -30,
      ink: 30,
      seedling: -10,
      ocean: 10,
      lapis: 30,
      wisteria: 10,
      peach: -10,
      yuzu: -20,
      'positive-delta': -20,
      'negative-delta': 0,
    };
    return amount <= lastWhite[color.toLowerCase()];
  }
}

export default Page;
