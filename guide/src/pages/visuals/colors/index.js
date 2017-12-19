import React from 'react';
import Link, { ActionLink } from 'components/Link';
import TipCard from 'components/tip-card';
import MarkdownContent from 'components/MarkdownContent.js';
import styles from './index.module.scss';
import ColorCard from './_ColorCard.js';
import ColorsIntro from './_ColorsIntro.md';
import ColorsShould from './_ColorsShould.md';
import ColorsShouldNot from './_ColorsShouldNot.md';

class Page extends React.Component {
  state = {
    showAccessibility: {},
  };

  render() {
    return (
      <div>
        <MarkdownContent content={ColorsIntro} />
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

        <h2 className={styles.sectionTitle}>Best Practices</h2>
        <div className={styles.tipsContainer}>
          <TipCard title="Colors should…" type="tip" content={ColorsShould} />
          <TipCard
            title="Colors should not…"
            type="warning"
            content={ColorsShouldNot}
          />
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }

  renderColorSection(title, colors) {
    const showAccessibility = this.state.showAccessibility[title];
    return [
      <div className={styles.gridHeader} key={title}>
        <h2 className={styles.sectionTitle}>{title}</h2>
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
