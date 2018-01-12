import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';
import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import emptyIcon from 'cultureamp-style-guide/icons/empty.svg';
import Link from 'components/Link';
import './index.scss';
import styles from './layout.module.scss';

const pages = [
  { title: 'Language', url: '/language', icon: emptyIcon },
  { title: 'Visuals', url: '/visuals', icon: emptyIcon },
  { title: 'Atoms', url: '/atoms', icon: emptyIcon },
  { title: 'Molecules', url: '/molecules', icon: emptyIcon },
  { title: 'Organisms', url: '/organisms', icon: emptyIcon },
  { title: 'Templates', url: '/templates', icon: emptyIcon },
  { title: 'Pages', url: '/pages', icon: emptyIcon },
];

const Header = () => (
  <div className={styles.pageContainer}>
    <h1 className={styles.title}>
      <Link to="/">Kaizen</Link> - Culture Amp's Living Style Guide
    </h1>
    <ul className={styles.menu}>
      {pages.map(page => (
        <li key={page.url} className={styles.item}>
          <Link to={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Nav = () => (
  <NavigationBar loading={false}>
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
      <div
        style={{
          background: '#fff',
          width: '100%',
          height: '100%',
          color: '#F8A6AE', // add-tint($ca-palette-coral, 50%)
        }}
      >
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
    <Nav />
    <Header />
    <div className={styles.pageContainer}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
