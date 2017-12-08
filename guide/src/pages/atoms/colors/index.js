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
import Color from 'color';

const Palette = {
  ink: Color('#3e4543'),
  paper: Color('#f2edde'),
  coral: Color('#f04c5d'),
  seedling: Color('#45ad8f'),
  ocean: Color('#1b7688'),
  wisteria: Color('#727193'),
  lapis: Color('#253c64'),
  peach: Color('#f3786d'),
  yuzu: Color('#ffce1e'),
  stone: Color('#f2f2f2'),
  'positive-delta': Color('#43e699'),
  'negative-delta': Color('#ff4757'),
};

function addTint(color, percentage) {
  return color.mix(Color('#ffffff'), percentage / 100);
}

function addShade(color, percentage) {
  return color.mix(Color('#000000'), percentage / 100);
}

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
    let isHalfBlock = false,
      label = '100%',
      sassVar = `$ca-palette-${color.toLowerCase()}`,
      shouldUseWhite = this.shouldUseWhiteText(color, amount || 0),
      bgColor = Palette[color.toLowerCase()];
    if (amount) {
      let shift = amount > 0 ? 'tint' : 'shade',
        absAmount = Math.abs(amount);
      sassVar = `add-${shift}(${sassVar}, ${absAmount}%)`;
      label = amount > 0 ? `+${absAmount}% White` : `+${absAmount}% Black`;
      bgColor =
        amount > 0 ? addTint(bgColor, absAmount) : addShade(bgColor, absAmount);
      isHalfBlock = true;
    }

    const classes = joinClassNames([
      colorCardStyles['colorBlock'],
      isHalfBlock && colorCardStyles['colorBlockHalf'],
      shouldUseWhite && colorCardStyles['whiteText'],
    ]);

    return (
      <div
        key={bgColor.rgb().string()}
        className={classes}
        style={{ background: bgColor.rgb().string() }}
      >
        <span className={colorCardStyles.colorBlockLabel}>{label}</span>
        <span className={colorCardStyles.kebabContainer}>
          <Kebab
            links={[]}
            actions={[
              this.colorDropdownItem('SASS', sassVar),
              this.colorDropdownItem('HEX', bgColor.hex()),
              this.colorDropdownItem(
                'RGB',
                bgColor
                  .rgb()
                  .array()
                  .map(Math.round)
                  .join(', ')
              ),
              this.colorDropdownItem(
                'CMYK',
                bgColor
                  .cmyk()
                  .array()
                  .map(Math.round)
                  .join(', ')
              ),
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

  colorDropdownItem(type, value) {
    let input;
    return {
      text: (
        <div className={colorCardStyles.dropdownItem}>
          <strong>{type}</strong> <small>{value}</small>
          <input type="text" defaultValue={value} ref={i => (input = i)} />
        </div>
      ),
      action: () => {
        if (input) {
          input.select();
          document.execCommand('copy');
        }
      },
      icon: duplicate,
      hoverIcon: true,
    };
  }
}

export default Page;
