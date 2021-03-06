import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';
import classNames from 'classnames';
import styles from './SubNav.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import iconStyles from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
import close from 'cultureamp-style-guide/icons/close.svg';
import page from 'cultureamp-style-guide/icons/insight.svg';
import sitemap from 'pages/_sitemap.js';

const SubNav = ({ closeNav }, context) => {
  const prefix = withPrefix('/'),
    path = '/' + context.router.route.location.pathname.substr(prefix.length);
  let sectionInfo = sitemap.children.find(section =>
    path.startsWith(section.href)
  );
  if (sectionInfo == null) {
    sectionInfo = sitemap;
  }
  return (
    <section className={styles.subNav}>
      <button
        className={styles.closeBtn}
        onClick={() => closeNav()}
        onMouseDown={e => e.preventDefault()}
      >
        <Icon icon={close} role="img" title="Close Nav" />
      </button>
      <h1>
        <span>{sectionInfo.title}</span>
      </h1>
      {sectionInfo.children.map(child => (
        <SubNavSection closeNav={closeNav} {...child} key={child.href} />
      ))}
    </section>
  );
};
SubNav.propTypes = {
  closeNav: PropTypes.func.isRequired,
};
SubNav.contextTypes = {
  router: PropTypes.object.isRequired,
};

const SubNavSection = ({ href, title, children, closeNav }) => (
  <div>
    <h2 className={styles.navSectionLabel}>{title}</h2>
    {children.map(child => (
      <SubNavItem closeNav={closeNav} {...child} key={child.href} />
    ))}
  </div>
);

const SubNavItem = ({ href, title, closeNav }) => (
  <Link
    to={href}
    className={styles.navItem}
    onClick={closeNav}
    activeClassName={classNames(styles.active, iconStyles.active)}
  >
    <span className={styles.navItemIcon}>
      <Icon icon={page} role="presentation" />
    </span>
    <span>{title}</span>
  </Link>
);

export default SubNav;
