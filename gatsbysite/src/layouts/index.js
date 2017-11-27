import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import menuStyles from './menu.module.css';

const pages = [
  'Visuals',
  'Atoms',
  'Molecules',
  'Organisms',
  'Templates',
  'Pages',
];

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Kaizen
        </Link>
      </h1>
      <h2 style={{ color: 'white' }}>Culture Amp's Living Style Guide</h2>
      <ul className={menuStyles.menu}>
        {pages.map(page => (
          <li className={menuStyles.item}>
            <Link to={'/' + page.toLowerCase()}>{page}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Kaizen</title>
      <meta
        name="description"
        content="The style guide for Culture Amp's design system, Kaizen"
      />
      <meta
        name="keywords"
        content="Culture Amp, design, system, style guide"
      />
      <meta name="referrer" content="origin" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cloud.typography.com/6384974/791628/css/fonts.css"
      />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
