import React from 'react';
import styles from './SubNav.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import close from 'cultureamp-style-guide/icons/close.svg';

const SubNav = ({ children, closeNav, title }) => (
  <section className={styles.subNav}>
    <button className={styles.closeBtn} onClick={() => closeNav()}>
      <Icon icon={close} role="img" title="Close Nav" />
    </button>
    <h1>{title}</h1>
    {children}
  </section>
);

export default SubNav;
