import React from 'react';
import PropTypes from 'prop-types';
import { Link, Heading1, Heading2 } from 'components/Elements';
import Helmet from 'react-helmet';
import './index.scss';
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
      margin: '0 auto',
      maxWidth: 1360,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <Heading1>
      <Link to="/">Kaizen</Link>
    </Heading1>
    <Heading2>Culture Amp's Living Style Guide</Heading2>
    <ul className={menuStyles.menu}>
      {pages.map(page => (
        <li className={menuStyles.item}>
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
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1360,
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
