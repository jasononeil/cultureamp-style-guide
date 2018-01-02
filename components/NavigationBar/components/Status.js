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
|};

const Status = ({
  label,
  tooltip,
  hideTooltip = false,
  style = 'status',
  onClick,
}: Props) => {
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
        className={classNames(styles.tooltip, { [styles.hidden]: hideTooltip })}
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
