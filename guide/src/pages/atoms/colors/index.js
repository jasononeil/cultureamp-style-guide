import React from 'react';
import {
  Link,
  ExternalLink,
  ActionLink,
  Heading1,
  Heading2,
} from 'components/Elements';
import Card from 'components/card';
import styles from './index.module.scss';
import successWhite from 'cultureamp-style-guide/icons/success.svg';
import exclamation from 'cultureamp-style-guide/icons/exclamation.svg';
import ColorCard from './_ColorCard.js';

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
      <div className={styles.gridHeader} key={title}>
        <Heading2>{title}</Heading2>
        <ActionLink action={() => this.toggleAccessibility(title)}>
          {showAccessibility
            ? 'Hide Contrast Checker'
            : 'Show Contrast Checker'}
        </ActionLink>
      </div>,
      colors.map(color => (
        <ColorCard
          name={color}
          key={color}
          showAccessibility={showAccessibility}
        />
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

export default Page;
