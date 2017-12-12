import React from 'react';
import classNames from 'classnames';
import wcag from 'wcag-contrast-verifier/lib/wcag';
import {
  Link,
  ExternalLink,
  ActionLink,
  Heading1,
  Heading2,
} from 'components/Elements';
import Kebab from 'components/kebab';
import Card from 'components/card';
import styles from './index.module.scss';
import colorCardStyles from './colorCard.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import chevronUp from 'cultureamp-style-guide/icons/chevron-up.svg';
import chevronDown from 'cultureamp-style-guide/icons/chevron-down.svg';
import ellipsis from 'cultureamp-style-guide/icons/ellipsis.svg';
import duplicate from 'cultureamp-style-guide/icons/duplicate.svg';
import successWhite from 'cultureamp-style-guide/icons/success.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation.svg';
import Color from 'color';

const Palette = {
  white: Color('#ffffff'),
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

function contrastIsLevelAA(background, foreground, fontSize) {
  return wcag.verifyContrastRatio(background.hex(), foreground.hex(), fontSize)
    .WCAG_AA;
}

class Page extends React.Component {
  state = {
    showAccessibility: {},
  };

  render() {
    return (
      <div>
        <Heading1>Colors</Heading1>
        <p className={styles.intro}>
          Our color palette is built with our core principles and guidelines as
          its foundation.
          <br />We are committed to complying with{' '}
          <ExternalLink to="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
            AA standard contrast ratios
          </ExternalLink>.
        </p>
        <hr className={styles.hr} />
        <div className={styles.cardContainer}>
          {this.renderColorSection('Primary Colors', ['Coral', 'Paper', 'Ink'])}
          {this.renderColorSection('Secondary Colors', [
            'Seedling',
            'Ocean',
            'Lapis',
            'Wisteria',
            'Peach',
            'Yuzu',
          ])}
          {this.renderColorSection('Tertiary Colors', [
            'Positive-Delta',
            'Negative-Delta',
            'Stone',
          ])}
        </div>

        <Heading2>Best Practices</Heading2>
        <div className={styles.tipsContainer}>
          <Card
            title="Colors should..."
            icon={successWhite}
            iconColor="seedling"
          >
            Do!!!
          </Card>
          <Card
            title="Colors should not..."
            icon={exclamation}
            iconColor="coral"
          >
            Don't!!!
          </Card>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }

  renderColorSection(title, colors) {
    const showAccessibility = this.state.showAccessibility[title];
    return [
      <div className={styles.gridHeader}>
        <Heading2>{title}</Heading2>
        <ActionLink action={() => this.toggleAccessibility(title)}>
          {showAccessibility
            ? 'Hide Contrast Checker'
            : 'Show Contrast Checker'}
        </ActionLink>
      </div>,
      colors.map(color => (
        <ColorCard name={color} showAccessibility={showAccessibility} />
      )),
    ];
  }

  toggleAccessibility(section) {
    let currentValue = this.state.showAccessibility[section];
    this.setState({
      showAccessibility: {
        ...this.state.showAccessibility,
        [section]: !currentValue,
      },
    });
  }
}

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
          {this.renderSubtitle()}
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

  renderSubtitle() {
    if (!this.props.showAccessibility) {
      return (
        <div className={colorCardStyles.subheader}>
          <h4>Tint &amp; Shade</h4>
        </div>
      );
    }
    const combination = (style, size) => {
      const titlePt1 = style == 'light' ? 'White text ' : 'Ink text ',
        titlePt2 =
          size == 'large'
            ? '18pt (24px) or larger'
            : 'smaller than 18pt (24px)',
        title = titlePt1 + titlePt2;
      return {
        bgColor:
          style == 'light' && Palette[this.props.name.toLowerCase()].hex(),
        className: classNames({
          [colorCardStyles.tile]: true,
          [colorCardStyles.small]: size === 'small',
          [colorCardStyles.large]: size === 'large',
          [colorCardStyles.whiteText]: style === 'light',
        }),
        title: title,
      };
    };
    const combinations = [
      combination('light', 'small'),
      combination('light', 'large'),
      combination('dark', 'small'),
      combination('dark', 'large'),
    ];
    return (
      <div className={colorCardStyles.subheader}>
        <h4>WCAG 2.0 AA</h4>
        {combinations.map(c => (
          <div>
            <span
              className={c.className}
              style={{ background: c.bgColor }}
              title={c.title}
            >
              A
            </span>
          </div>
        ))}
      </div>
    );
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
      showAccessibility = this.props.showAccessibility,
      label = '100%',
      sassVar = `$ca-palette-${color.toLowerCase()}`,
      bgColor = Palette[color.toLowerCase()];

    if (amount) {
      const absAmount = Math.abs(amount);
      if (amount > 0) {
        sassVar = `add-tint(${sassVar}, ${absAmount}%)`;
        label = `+${absAmount}% White`;
        bgColor = addTint(bgColor, absAmount);
      } else {
        sassVar = `add-shade(${sassVar}, ${absAmount}%)`;
        label = `+${absAmount}% Black`;
        bgColor = addShade(bgColor, absAmount);
      }
      isHalfBlock = true;
    }

    let shouldUseWhite = this.shouldUseWhiteText(bgColor);

    const classes = classNames(
      colorCardStyles['colorBlock'],
      isHalfBlock && colorCardStyles['colorBlockHalf'],
      shouldUseWhite && colorCardStyles['whiteText']
    );

    return (
      <div
        key={bgColor.rgb().string()}
        className={classes}
        style={{ background: bgColor.rgb().string() }}
      >
        <span className={colorCardStyles.colorBlockLabel}>{label}</span>
        {showAccessibility
          ? this.renderColorAccessibilityIcons(bgColor, `${color} ${label}`)
          : this.renderColorBarKebab(bgColor, sassVar)}
      </div>
    );
  }

  shouldUseWhiteText(color) {
    const whiteContrast = wcag.getContrastRatio(color.hex(), '#ffffff'),
      blackContrast = wcag.getContrastRatio(color.hex(), Palette.ink.hex());
    return whiteContrast > blackContrast;
  }

  renderColorAccessibilityIcons(color, name) {
    function renderIcon(textColorName, fontSize) {
      const textColor = Palette[textColorName.toLowerCase()],
        isValid = contrastIsLevelAA(color, textColor, fontSize),
        title = `${textColorName} text on '${
          name
        }' with a font size of at least ${fontSize}pt is level AA contrast.`;
      return (
        <div
          className={colorCardStyles.accessibilityIcon}
          style={{ color: textColor.rgb() }}
        >
          {isValid && <Icon icon={successWhite} role="img" title={title} />}
        </div>
      );
    }
    return [
      renderIcon('White', 12),
      renderIcon('White', 18),
      renderIcon('Ink', 12),
      renderIcon('Ink', 18),
    ];
  }

  renderColorBarKebab(bgColor, sassVar) {
    return (
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
    );
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
