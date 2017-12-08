import React from 'react';
import { Link, ExternalLink, Heading1, Heading2 } from 'components/Elements';
import Kebab from 'components/kebab/Kebab';
import joinClassNames from 'guide-util/joinClassNames.js';
import styles from './index.module.scss';
import colorCardStyles from './colorCard.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import chevronUp from 'cultureamp-style-guide/icons/chevron-up.svg';
import chevronDown from 'cultureamp-style-guide/icons/chevron-down.svg';
import ellipsis from 'cultureamp-style-guide/icons/ellipsis.svg';
import duplicate from 'cultureamp-style-guide/icons/duplicate.svg';

const Page = () => (
  <div>
    <Heading1>Colors</Heading1>
    <p className={styles.intro}>
      Our color palette is built with our core principles and guidelines as its
      foundation.
      <br />We are committed to complying with{' '}
      <ExternalLink to="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
        AA standard contrast ratios
      </ExternalLink>.
    </p>
    <hr className={styles.hr} />
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
      <ColorCard name="Positive-Delta" />
      <ColorCard name="Negative-Delta" />
      <ColorCard name="Stone" />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
);

class ColorCard extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const { name } = this.props,
      colorClassName = colorCardStyles[name.toLowerCase()];
    return (
      <div>
        <div className={colorCardStyles.colorCard}>
          <h3>{this.renderColorTitleAndToggle()}</h3>
          <h4>Tint &amp; Shade</h4>
          {this.renderColorBlocks(this.state.expanded)}
        </div>
      </div>
    );
  }

  toggleOpen() {
    this.setState({ expanded: !this.state.expanded });
  }

  renderColorTitleAndToggle() {
    if (!this.isExpandable()) {
      return <span>{this.props.name}</span>;
    }
    const toggleIcon = this.state.expanded ? chevronUp : chevronDown,
      toggleTitle = this.state.expanded ? 'Collapse Color' : 'Expand Color';
    return (
      <a onClick={() => this.toggleOpen()}>
        {this.props.name}
        <span className={colorCardStyles.toggleIconWrapper}>
          <Icon icon={toggleIcon} role="img" title={toggleTitle} />
        </span>
      </a>
    );
  }

  isExpandable() {
    return this.props.name !== 'Stone';
  }

  renderColorBlocks(showVariations) {
    const colorName = this.props.name;
    const mainBlock = this.renderBlock(colorName);
    if (!showVariations || !this.isExpandable()) {
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
      label = '100%',
      sassVar = `$ca-palette-${colorClassName}`,
      shouldUseWhite = this.shouldUseWhiteText(color, amount || 0);
    if (amount) {
      let shift = amount > 0 ? 'tint' : 'shade',
        absAmount = Math.abs(amount);
      sassVar = `add-${shift}($ca-palette-${colorClassName}, ${absAmount}%)`;
      label = amount > 0 ? `+${absAmount}% White` : `+${absAmount}% Black`;
      colorClassName = `${colorClassName}-${shift}-${absAmount}`;
      isHalfBlock = true;
    }

    const classes = joinClassNames([
      colorCardStyles['colorBlock'],
      colorCardStyles[colorClassName],
      isHalfBlock && colorCardStyles['colorBlockHalf'],
      shouldUseWhite && colorCardStyles['whiteText'],
    ]);

    return (
      <div className={classes}>
        <span className={colorCardStyles.colorBlockLabel}>{label}</span>
        <span className={colorCardStyles.kebabContainer}>
          <Kebab
            links={[]}
            actions={[
              { text: `SASS ${sassVar}`, action: () => {}, icon: duplicate },
              { text: 'HEX', action: () => {}, icon: duplicate },
              { text: 'RGB', action: () => {}, icon: duplicate },
              { text: 'CMYK', action: () => {}, icon: duplicate },
            ]}
            title="Copy To Clipboard"
          />
        </span>
      </div>
    );
  }

  shouldUseWhiteText(color, amount) {
    const lastWhite = {
      coral: 10,
      paper: -40,
      ink: 30,
      seedling: -10,
      ocean: 10,
      lapis: 30,
      wisteria: 10,
      peach: -10,
      yuzu: -30,
      'positive-delta': -30,
      'negative-delta': 10,
    };
    return amount <= lastWhite[color.toLowerCase()];
  }
}

export default Page;
