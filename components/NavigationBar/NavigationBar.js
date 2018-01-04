// @flow
import * as React from 'react';

import styles from './NavigationBar.module.scss';
import {
  ProductionBadge,
  StagingBadge,
  TestBadge,
  LocalBadge,
  namedBadge,
} from './components/Badge.js';
import Link from './components/Link.js';
import Status from './components/Status.js';
import StatusMenu from './components/StatusMenu.js';

type SupportedChild =
  | React.Element<typeof Link>
  | React.Element<typeof Status>
  | React.Element<typeof StatusMenu>;

type Props = {|
  environment: string,
  loading: boolean,
  children: React.ChildrenArray<SupportedChild | false>,
|};

type State = {|
  menuOpen: boolean,
|};

export default class NavigationBar extends React.Component<Props, State> {
  render() {
    const { environment, loading, children } = this.props;

    const links = [];
    const otherChildren = [];
    React.Children.toArray(children).forEach(child => {
      if (typeof child === 'boolean') return;
      if (child.type == Link) links.push(child);
      else otherChildren.push(child);
    });

    return (
      <nav className={styles.navigationBar}>
        {this.renderBadge()}
        {this.renderLinks(links)}
        {this.renderOtherChildren(otherChildren)}
      </nav>
    );
  }

  renderBadge() {
    const { environment, loading } = this.props;

    const badges: {
      [key: string]: React.ComponentType<{| loading: boolean |}>,
    } = {
      production: ProductionBadge,
      staging: StagingBadge,
      test: TestBadge,
      local: LocalBadge,
    };
    const Badge = badges[environment] || namedBadge(environment);
    return <Badge loading={loading} />;
  }

  renderLinks(links: SupportedChild[]) {
    return (
      <ul className={styles.linkList}>
        {links.map(link => (
          <li key={link.key} className={styles.child}>
            <div>
              {React.cloneElement(link, {
                hideTooltip: this.state.menuOpen,
              })}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  renderOtherChildren(otherChildren: SupportedChild[]) {
    return otherChildren.map(child => (
      <div key={child.key} className={styles.child}>
        <div>
          {React.cloneElement(child, {
            hideTooltip: this.state.menuOpen,
            onMenuChange: this.menuChange,
          })}
        </div>
      </div>
    ));
  }

  menuChange = (open: boolean) => {
    this.setState({ menuOpen: open });
  };

  static defaultProps = { environment: 'production', loading: false };

  state = { menuOpen: false };

  static Link = Link;
  static StatusMenu = StatusMenu;
  static Status = Status;
}
