import PropTypes from 'prop-types';
import React from 'react';
import styles from './Kebab.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import kebabIcon from 'cultureamp-style-guide/icons/ellipsis.svg';
import KebabMenu from './KebabMenu';

export default class Kebab extends React.Component {
  state = {
    isKebabMenuVisible: Boolean(this.props.menuVisible),
  };

  toggleKebabMenu = e => {
    e.stopPropagation();
    const currentState = this.state.isKebabMenuVisible;
    this.setState({
      isKebabMenuVisible: !currentState,
    });
  };

  hideKebabMenu = () => {
    this.setState({
      isKebabMenuVisible: false,
    });
  };

  kebabRef = c => {
    this.kebab = c;
  };

  getPosition() {
    return this.kebab ? this.kebab.getBoundingClientRect() : null;
  }

  renderKebabMenu() {
    return (
      <KebabMenu
        hideKebabMenu={this.hideKebabMenu}
        position={this.getPosition()}
      >
        {this.props.children}
      </KebabMenu>
    );
  }

  render() {
    return (
      <div className={styles.fieldKebabIconInner}>
        <div
          className={styles.kebabIcon}
          onClick={this.toggleKebabMenu}
          ref={this.kebabRef}
        >
          <div className={this.state.isKebabMenuVisible ? styles.isOpen : ''}>
            <Icon icon={kebabIcon} role="img" title={this.props.title} />
          </div>
        </div>
        {this.state.isKebabMenuVisible && this.renderKebabMenu()}
      </div>
    );
  }
}

Kebab.propTypes = {
  children: PropTypes.node.isRequired,
  menuVisible: PropTypes.bool,
};
