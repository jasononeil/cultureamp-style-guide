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
        headerTitle={this.props.title}
        headerInfo={this.props.headerInfo}
        headerClass={this.props.headerClass}
        links={this.props.links}
        actions={this.props.actions}
        hideKebabMenu={this.hideKebabMenu}
        position={this.getPosition()}
      />
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
  title: PropTypes.string.isRequired,
  headerInfo: PropTypes.string,
  headerClass: PropTypes.string,
  links: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  menuVisible: PropTypes.bool,
};
