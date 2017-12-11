import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './KebabMenu.module.scss';
import { MenuItemLink, MenuItemAction } from './KebabMenuItems';

export default class KebabMenuList extends React.Component {
  renderLinks(links) {
    return links.map((item, index) => {
      return <MenuItemLink text={item.text} link={item.link} key={index} />;
    });
  }

  renderActions(actions) {
    return actions.map((item, index) => {
      return (
        <MenuItemAction
          text={item.text}
          action={item.action}
          icon={item.icon}
          hoverIcon={item.hoverIcon}
          key={index}
          hideKebabMenu={this.props.hideKebabMenu}
        />
      );
    });
  }

  renderLinksContainer(links) {
    if (links.length > 0) {
      return (
        <div className={styles.linksContainer}>{this.renderLinks(links)}</div>
      );
    }
  }

  renderActionsContainer(actions) {
    if (actions.length > 0) {
      return (
        <div className={styles.actionsContainer}>
          {this.renderActions(actions)}
        </div>
      );
    }
  }

  renderSeparator(props) {
    return props.links.length > 0 && props.actions.length > 0 ? (
      <hr className={styles.separator} />
    ) : (
      ''
    );
  }

  render() {
    const props = this.props;
    const headerClasses = classNames({
      [styles.headerContainer]: true,
      [styles[props.headerClass]]: props.headerClass,
    });

    return (
      <div className={styles.menuContainer}>
        <div className={headerClasses}>
          <span className={styles.headerTitle}>{props.headerTitle}</span>
          <span className={styles.headerContent}>{props.headerInfo}</span>
        </div>
        {this.renderLinksContainer(props.links)}
        {this.renderSeparator(props)}
        {this.renderActionsContainer(props.actions)}
      </div>
    );
  }
}

KebabMenuList.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerInfo: PropTypes.string,
  headerClass: PropTypes.string,
  links: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  hideKebabMenu: PropTypes.func,
};
