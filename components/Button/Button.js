import React from 'react';
import styles from './Button.scss';

export default function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className={styles.button}>{children}</button>
  );
}
