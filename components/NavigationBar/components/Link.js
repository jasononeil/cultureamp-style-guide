// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';

type Props = {|
  icon: { id: string, viewBox: string },
  href: string,
  active: boolean,
  tooltip: string,
  id: string,
  onClick: (event: SyntheticMouseEvent<>) => void,
|};

const Link = ({ icon, href, active, tooltip, id, onClick }: Props) => {
  return (
    <div className={styles.root}>
      <a
        className={active ? styles.activeLink : styles.hoverLink}
        {...{ href, id, onClick }}
      >
        <Icon icon={icon} title={tooltip} />
      </a>
      <div className={styles.tooltip} aria-hidden>
        <small>{tooltip}</small>
      </div>
    </div>
  );
};

export default Link;
