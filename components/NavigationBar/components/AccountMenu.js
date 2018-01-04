// @flow
import * as React from 'react';
import classNames from 'classnames';

import styles from './AccountMenu.module.scss';

type Props = {
  user: { name: string },
  company: { name: string, logo: string },
  tooltip: string,
  hideTooltip: boolean,
  signOutLink: string,
  menuItems: Array<{|
    label: string,
    link: string,
    data?: { [key: string]: string },
  |}>,
  onMenuChange?: (open: boolean) => void,
};

type State = {
  open: boolean,
};

export default class AccountMenu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static defaultProps = {
    menuItems: [],
    hideTooltip: false,
  };

  state = { open: false };

  render() {
    const { company, tooltip, hideTooltip } = this.props;

    return (
      <div className={styles.root} ref={root => (this.root = root)}>
        <button onClick={this.toggle} className={styles.button}>
          <img src={company.logo} alt={company.name} className={styles.logo} />
        </button>
        <div
          className={classNames(styles.tooltip, {
            [styles.suppressed]: hideTooltip,
          })}
          role="tooltip"
        >
          <small>{tooltip}</small>
        </div>
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
      <div className={styles.menu}>
        <div>
          {this.renderUserAndAccountDetails()}
          {this.props.menuItems.map(({ label, link, data = {} }, index) => {
            const dataAttributes = {};
            Object.keys(data).forEach(key => {
              dataAttributes[`data-${key}`] = data[key];
            });

            return (
              <a
                key={index}
                href={link}
                className={styles.menuItem}
                {...dataAttributes}
              >
                {label}
              </a>
            );
          })}
          <a
            href={this.props.signOutLink}
            className={styles.menuItem}
            data-method="delete"
          >
            Sign Out
          </a>
        </div>
      </div>
    );
  }

  renderUserAndAccountDetails() {
    const {
      user: { name: userName },
      company: { name: companyName },
    } = this.props;

    return (
      <div className={styles.userDetails}>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.companyName}>{companyName}</div>
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
