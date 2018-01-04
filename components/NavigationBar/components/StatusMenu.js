// @flow
import * as React from 'react';

import styles from './StatusMenu.module.scss';
import Status from './Status.js';

type Props = {
  label: string,
  tooltip: string,
  hideTooltip: boolean,
  style?: 'status' | 'masquerading' | 'superuser',
  menuItems: Array<{| label: string, link: string |}>,
  onMenuChange?: (open: boolean) => void,
};

type State = {
  open: boolean,
};

export default class StatusMenu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static defaultProps = {
    menuItems: [],
    hideTooltip: false,
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
          hideTooltip={this.state.open || this.props.hideTooltip}
        />
        {this.state.open && this.renderMenu()}
      </div>
    );
  }

  toggle = (e: SyntheticEvent<> | MouseEvent) => {
    const open = !this.state.open;
    this.setState({ open });
    if (this.props.onMenuChange) this.props.onMenuChange(open);
    e.preventDefault();
  };

  renderMenu() {
    return (
      <div
        className={styles.menu}
        ref={menu => menu && menu.focus()}
        tabIndex="-1"
      >
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

  clickDocument = (e: MouseEvent) => {
    // We can't just stopPropagation of click events in the menu, because a
    // click in this menu may also need to dismiss another open menu.
    if (
      this.state.open &&
      this.root &&
      !(e.target instanceof Node && this.root.contains(e.target))
    ) {
      this.toggle(e);
    }
  };
}
