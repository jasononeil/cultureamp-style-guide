import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styles from './SubNav.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import close from 'cultureamp-style-guide/icons/close.svg';
import page from 'cultureamp-style-guide/icons/insight.svg';
import sitemap from 'pages/_sitemap.js';

const SubNavItem = ({ href, title, closeNav }) => (
  <Link to={href} className={styles.navItem} onClick={closeNav}>
    <span className={styles.navItemIcon}>
      <Icon icon={page} role="presentational" />
    </span>
    <span className={styles.navItemText}>{title}</span>
  </Link>
);

const SubNav = ({ closeNav }, context) => {
  const prefix = withPrefix('/'),
    path = context.router.route.location.pathname,
    sectionInfo = sitemap.find(section => path.startsWith(section.href)),
    childLinks = sectionInfo.children;
  return (
    <section className={styles.subNav}>
      <button className={styles.closeBtn} onClick={() => closeNav()}>
        <Icon icon={close} role="img" title="Close Nav" />
      </button>
      <h1>{sectionInfo.title}</h1>
      {sectionInfo.children.map(child => (
        <SubNavItem closeNav={closeNav} {...child} />
      ))}
    </section>
  );
};
SubNav.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default SubNav;
