// @flow
import * as React from 'react';
import classNames from 'classnames';

import styles from './Status.module.scss';

type Props = {|
  label: string,
  tooltip: string,
  hideTooltip: boolean,
  style: 'status' | 'masquerading' | 'superuser',
  onClick?: (event: SyntheticMouseEvent<>) => void,
  onMenuChange?: (open: boolean) => void,
|};

const Status = ({ label, tooltip, hideTooltip, style, onClick }: Props) => {
  return (
    <div className={styles.root}>
      {onClick ? (
        <button onClick={onClick} className={styles.button}>
          {renderStatus()}
        </button>
      ) : (
        renderStatus()
      )}
      <div
        className={classNames(styles.tooltip, {
          [styles.suppressed]: hideTooltip,
        })}
        role="tooltip"
        id={`status-${label}-tooltip`}
      >
        <small>{tooltip}</small>
      </div>
    </div>
  );

  function renderStatus() {
    return (
      <div
        tabIndex={!onClick && '0'}
        className={styles[style]}
        role="img"
        aria-labelledby={`status-${label}-tooltip`}
      >
        {label}
      </div>
    );
  }
};

Status.defaultProps = {
  hideTooltip: false,
  style: 'status',
};

export default Status;
