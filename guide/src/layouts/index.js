import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';
import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';
import diamond from './diamond.svg';
import { Link, ExternalLink, ActionLink } from 'components/Link';
import './index.scss';
import styles from './layout.module.scss';

const pages = [
  { title: 'Language', url: '/language', icon: enso },
  { title: 'Visuals', url: '/visuals', icon: enso },
  { title: 'Atoms', url: '/atoms', icon: enso },
  { title: 'Molecules', url: '/molecules', icon: enso },
  { title: 'Organisms', url: '/organisms', icon: enso },
  { title: 'Templates', url: '/templates', icon: enso },
  { title: 'Pages', url: '/pages', icon: enso },
];

const Header = () => (
  <div className={styles.headerBar}>
    <ActionLink action={() => navigateTo('/')}>
      <Icon icon={hamburgerIcon} type="img" title="Expand Menu" />
    </ActionLink>
    <ExternalLink to="https://github.com/cultureamp/component-library">
      Download Style Guide
      <span className={styles.downloadIcon}>
        <Icon icon={diamond} type="presentational" />
      </span>
    </ExternalLink>
  </div>
);

const Nav = () => (
  <NavigationBar loading={false} colorScheme="kaizen">
    {pages.map(page => (
      <NavigationBar.Link
        key={page.url}
        icon={page.icon}
        href={page.url}
        tooltip={page.title}
        onClick={e => {
          navigateTo(page.url);
          e.preventDefault();
        }}
      />
    ))}
    <NavigationBar.Menu
      tooltip="Culture Amp"
      header={<div>About Culture Amp</div>}
      items={[
        {
          label: 'Culture Amp',
          link: 'http://cultureamp.com/',
        },
        {
          label: 'Careers',
          link: 'https://www.cultureamp.com/about/careers/',
        },
        {
          label: 'Github',
          link: 'https://github.com/cultureamp/',
        },
      ]}
    >
      <div className={styles.cultureAmpMenu}>
        <Icon
          icon={enso}
          role="img"
          title="Culture Amp Logo"
          inheritSize={true}
        />
      </div>
    </NavigationBar.Menu>
  </NavigationBar>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Kaizen</title>
      <meta name="description" content="Kaizen - Culture Amp's Style Guide" />
      <meta name="keywords" content="Culture Amp, design system, style guide" />
    </Helmet>
    <div className={styles.grid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.content}>
        <div className={styles.pageContainer}>{children()}</div>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
