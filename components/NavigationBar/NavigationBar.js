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
import StatusMenu from './components/StatusMenu.js';
import Status from './components/Status.js';

type Props = {|
  environment: string,
  loading: boolean,
  children: React.ChildrenArray<React.Element<any> | false>,
|};

const NavigationBar = (props: Props) => {
  const { environment, loading, children } = props;

  const otherChildren = [];
  const links = React.Children.toArray(children).filter(child => {
    if (child.type === Link) return true;
    otherChildren.push(child);
  });

  return (
    <nav className={styles.navigationBar}>
      {renderBadge()}
      {renderLinks()}
      {renderOtherChildren()}
    </nav>
  );

  function renderBadge() {
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

  function renderLinks() {
    return (
      <ul className={styles.linkList}>
        {links.map(
          link =>
            // https://github.com/facebook/flow/issues/4790
            typeof link !== 'boolean' && (
              <li key={link.key} className={styles.child}>
                <div>{link}</div>
              </li>
            )
        )}
      </ul>
    );
  }

  function renderOtherChildren() {
    return otherChildren.map(
      child =>
        // https://github.com/facebook/flow/issues/4790
        typeof child !== 'boolean' && (
          <div key={child.key} className={styles.child}>
            <div>{child}</div>
          </div>
        )
    );
  }
};

NavigationBar.defaultProps = {
  environment: 'production',
  loading: false,
};

// child elements
NavigationBar.Link = Link;
NavigationBar.StatusMenu = StatusMenu;
NavigationBar.Status = Status;

export default NavigationBar;
