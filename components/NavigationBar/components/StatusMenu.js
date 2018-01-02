// @flow
import * as React from 'react';

import styles from './StatusMenu.module.scss';
import Status from './Status.js';

type Props = {
  label: string,
  tooltip: string,
  style?: 'status' | 'masquerading' | 'superuser',
  menuItems: Array<{| label: string, link: string |}>,
};

type State = {
  open: boolean,
};

export default class StatusMenu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static defaultProps = {
    menuItems: [],
  };

  state = { open: false };

  render() {
    const { label, tooltip, style } = this.props;

    return (
      <div className={styles.root} ref={root => (this.root = root)}>
        <Status
          label={label}
          tooltip={tooltip}
          style={style}
          onClick={this.toggle}
          hideTooltip={this.state.open}
        />
        {this.state.open && this.renderMenu()}
      </div>
    );
  }

  toggle = (e: SyntheticEvent<>) => {
    this.setState({ open: !this.state.open });
    e.preventDefault();
  };

  renderMenu() {
    return (
      <div className={styles.menu}>
        <div>
          {this.props.menuItems.map(({ label, link }, index) => (
            <a key={index} href={link} className={styles.menuItem}>
              {label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('click', this.clickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickDocument);
  }

  clickDocument = ({ target }: MouseEvent) => {
    // We can't just stopPropagation of click events in the menu, because a
    // click in this menu may also need to dismiss another open menu.
    if (this.root && !(target instanceof Node && this.root.contains(target))) {
      this.setState({ open: false });
    }
  };
}
