import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Helmet from 'react-helmet';
import './index.scss';
import styles from './layout.module.scss';

const pages = [
  'Visuals',
  'Atoms',
  'Molecules',
  'Organisms',
  'Templates',
  'Pages',
];

const Header = () => (
  <div className={styles.pageContainer}>
    <h1 className={styles.title}>
      <Link to="/">Kaizen</Link> - Culture Amp's Living Style Guide
    </h1>
    <ul className={styles.menu}>
      {pages.map(page => (
        <li key={page} className={styles.item}>
          <Link to={'/' + page.toLowerCase()}>{page}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Kaizen</title>
      <meta name="description" content="Kaizen - Culture Amp's Style Guide" />
      <meta name="keywords" content="Culture Amp, design system, style guide" />
    </Helmet>
    <Header />
    <div className={styles.pageContainer}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
