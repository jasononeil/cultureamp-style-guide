import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';
import classNames from 'classnames';
import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';
import diamond from './diamond.svg';
import { Link, ExternalLink, ActionLink } from 'components/Link';
import Breadcrumb from 'components/Breadcrumb';
import SubNav from 'components/SubNav';
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

const Header = ({ toggleNav }) => (
  <div className={styles.headerBar}>
    <ActionLink action={() => toggleNav()}>
      <Icon icon={hamburgerIcon} type="img" title="Expand Menu" />
    </ActionLink>
    <ExternalLink to="https://github.com/cultureamp/component-library">
      Download Style Guide
      <span className={styles.downloadIcon}>
        <Icon icon={diamond} type="presentation" />
      </span>
    </ExternalLink>
  </div>
);

const MainNav = () => (
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

class TemplateWrapper extends React.Component {
  state = {
    navOpen: false,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Kaizen</title>
          <meta
            name="description"
            content="Kaizen - Culture Amp's Style Guide"
          />
          <meta
            name="keywords"
            content="Culture Amp, design system, style guide"
          />
        </Helmet>
        <div
          className={classNames(styles.layout, {
            [styles.navOpen]: this.state.navOpen,
          })}
        >
          <div className={styles.nav}>
            <MainNav />
          </div>
          <div className={styles.subnav}>
            <SubNav title="What" closeNav={() => this.closeNav()} />
          </div>
          <div
            className={styles.subnavBackdrop}
            onClick={() => this.closeNav()}
          />
          <div className={styles.header}>
            <Header toggleNav={() => this.toggleNav()} />
          </div>
          <div className={styles.content}>
            <div className={styles.pageContainer}>
              <Breadcrumb />
              {children()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  closeNav() {
    this.setState({ navOpen: false });
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
