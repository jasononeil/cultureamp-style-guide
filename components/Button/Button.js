import React from 'react';
import styles from './Button.scss';

export default function Button({ label, disabled }) {
  return <button disabled={disabled} className={styles.button}>{label}</button>;
}
