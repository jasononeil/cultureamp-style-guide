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
  hideTooltip: boolean,
  id?: string,
  onClick?: (event: SyntheticMouseEvent<>) => void,
|};

const Link = ({
  icon,
  href,
  active,
  tooltip,
  hideTooltip,
  id,
  onClick,
}: Props) => {
  return (
    <div className={styles.root}>
      <a
        className={classNames(styles.hoverLink, { [styles.active]: active })}
        {...{ href, id, onClick }}
      >
        <Icon icon={icon} title={tooltip} />
      </a>
      <div
        className={classNames(styles.tooltip, {
          [styles.suppressed]: hideTooltip,
        })}
        aria-hidden
      >
        <small>{tooltip}</small>
      </div>
    </div>
  );
};

Link.defaultProps = {
  active: false,
  hideTooltip: false,
};

export default Link;
