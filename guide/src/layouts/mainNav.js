import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo, withPrefix } from 'gatsby-link';
import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import sitemap from 'pages/_sitemap.js';

const MainNav = ({ openNav }, context) => {
  const prefix = withPrefix('/'),
    path = '/' + context.router.route.location.pathname.substr(prefix.length);
  return (
    <NavigationBar loading={false} colorScheme="kaizen">
      {sitemap.children.map(page => (
        <NavigationBar.Link
          key={page.title}
          icon={page.icon}
          href={page.href}
          tooltip={page.title}
          onClick={e => {
            // Only navigate to this section if we're not already in this section.
            if (!path.startsWith(page.href)) {
              navigateTo(page.href);
            }
            openNav();
            e.preventDefault();
          }}
          active={path.startsWith(page.href)}
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
};
MainNav.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default MainNav;
