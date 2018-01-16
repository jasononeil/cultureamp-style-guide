import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import styles from './_IconGrid.module.scss';
import iconStyles from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
import tick from 'cultureamp-style-guide/icons/check.svg';

class IconTile extends React.Component {
  state = {
    recentlyCopied: false,
  };

  render() {
    const { title, path, icon } = this.props;
    return (
      <button
        className={classNames({
          [styles.iconTile]: true,
          [styles.clicked]: this.state.recentlyCopied,
          [iconStyles.active]: this.state.recentlyCopied,
        })}
        onClick={e => this.copyPath()}
      >
        <div className={styles.tileWrapper}>
          <span className={styles.iconLabel}>{title}</span>
          <span className={styles.iconWrapper}>
            <Icon icon={icon} role="presentational" />
          </span>
          {this.renderCopyLabel()}
        </div>
      </button>
    );
  }

  renderCopyLabel() {
    const path = this.props.path,
      copied = this.state.recentlyCopied;
    return (
      <span className={styles.copyLabel}>
        {copied ? 'Copied to Clipboard' : 'Copy Import Path'}
        {copied && (
          <span className={styles.tickIcon}>
            <Icon icon={tick} role="presentational" />
          </span>
        )}
        <input
          ref={i => (this.input = i)}
          value={path}
          readOnly={true}
          tabIndex={-1}
          aria-label="Icon Import Path"
          className={styles.pathInput}
        />
      </span>
    );
  }

  copyPath() {
    if (this.input) {
      this.input.select();
      document.execCommand('copy');
      this.setState({ recentlyCopied: true });
      setTimeout(() => this.setState({ recentlyCopied: false }), 2000);
    }
  }
}

IconTile.PropTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default IconTile;
