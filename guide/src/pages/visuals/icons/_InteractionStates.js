import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import styles from './_IconsPage.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';

class InteractionStates extends React.Component {
  render() {
    return (
      <Card dark={this.props.dark}>
        <div className={styles.cardWrapper}>
          {this.renderIcon('Disabled', 30)}
          {this.renderIcon('Inactive', 50)}
          {this.renderIcon('Hover', 70)}
          {this.renderIcon('Active', 100)}
        </div>
      </Card>
    );
  }

  renderIcon(title, opacity) {
    return (
      <div className={styles.iconExample}>
        <strong>{title}</strong>
        <span style={{ opacity: opacity / 100 }}>
          <Icon icon={enso} role="presentational" />
        </span>
        <span className={styles.opacityLabel}>{opacity} %</span>
      </div>
    );
  }
}

InteractionStates.PropTypes = {
  dark: PropTypes.bool.isRequired,
};

export default InteractionStates;
