import React from 'react';
import Color from 'color';
import wcag from 'wcag-contrast-verifier/lib/wcag';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import chevronUp from 'cultureamp-style-guide/icons/chevron-up.svg';
import chevronDown from 'cultureamp-style-guide/icons/chevron-down.svg';
import ellipsis from 'cultureamp-style-guide/icons/ellipsis.svg';
import successWhite from 'cultureamp-style-guide/icons/success.svg';
import duplicate from 'cultureamp-style-guide/icons/duplicate.svg';
import Kebab from 'components/kebab';
import styles from './colorCard.module.scss';

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

class ColorCard extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const { name } = this.props,
      colorClassName = styles[name.toLowerCase()];
    return (
      <div>
        <div className={styles.colorCard}>
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
        <span className={styles.toggleIconWrapper}>
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
        <div className={styles.subheader}>
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
          [styles.tile]: true,
          [styles.small]: size === 'small',
          [styles.large]: size === 'large',
          [styles.whiteText]: style === 'light',
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
      <div className={styles.subheader}>
        <h4>WCAG 2.0 AA</h4>
        {combinations.map((c, i) => (
          <div>
            <span
              className={c.className}
              key={i}
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
      styles['colorBlock'],
      isHalfBlock && styles['colorBlockHalf'],
      shouldUseWhite && styles['whiteText']
    );

    return (
      <div
        key={bgColor.rgb().string()}
        className={classes}
        style={{ background: bgColor.rgb().string() }}
      >
        <span className={styles.colorBlockLabel}>{label}</span>
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
          className={styles.accessibilityIcon}
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
      <span className={styles.kebabContainer}>
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
        <div className={styles.dropdownItem}>
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

export default ColorCard;
