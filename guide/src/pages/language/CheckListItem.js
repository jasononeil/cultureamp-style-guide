import React from 'react';
import classNames from 'classnames';
import styles from './CheckListItem.module.scss';

export default class CheckListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <label
        className={classNames(styles.label, {
          [styles.checked]: this.state.checked,
        })}
      >
        <input
          type="checkbox"
          onChange={e => this.setState({ checked: e.target.checked })}
        />{' '}
        {this.props.label}
      </label>
    );
  }
}
