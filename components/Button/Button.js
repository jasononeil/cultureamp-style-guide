import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

export default function Button({
  disabled = false,
  primary = true,
  destructive = false,
  darkBackground = false,
  // icon = false,
  // directional = false,
  fixed = false,
  size = 'large',
  children,
}) {
  const className = classnames({
    // [this.mainClass(args)]: !(icon || otherType || thirdType),
    [styles.button]: true,
    [styles.primary]: primary && !destructive && !darkBackground,
    [styles.secondary]: !destructive && !primary,
    [styles.ghost]: darkBackground,
    [styles.fixed]: fixed,
    [styles.mid]: size === 'mid',
    [styles.small]: size === 'small',
  })

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  destructive: React.PropTypes.bool,
  icon: React.PropTypes.bool,
}
