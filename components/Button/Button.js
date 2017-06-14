import React from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

export default function Button({disabled = false, primary = true, destructive = false, darkBackground = false, icon = false, children}) {

  const className = classnames({
    // [this.mainClass(args)]: !(icon || otherType || thirdType),
    [styles.button]: true,
    [styles.primary]: primary && !destructive && !darkBackground,
    [styles.secondary]: !destructive && !primary,
    [styles.inverted]: darkBackground,
    // [styles.icon]: icon,
  })

  return (
    <button
      disabled={disabled}
      className={className}
    >{children}</button>
  );
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  destructive: React.PropTypes.bool,
  icon: React.PropTypes.bool,
}
