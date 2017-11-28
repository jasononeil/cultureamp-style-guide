import React from 'react';
import Link from 'gatsby-link';
import Demo from 'components/Demo';
import Icon from '../../../../components/Icon/Icon.js';
import configureIcon from 'cultureamp-style-guide/icons/configure.svg';

const iconPresets = [
  {
    name: 'Meaningful',
    props: { icon: configureIcon, role: 'img', title: 'Warning' },
  },
  {
    name: 'Presentational',
    props: { icon: configureIcon, role: 'presentation' },
  },
  {
    name: 'Inherit size',
    props: { icon: configureIcon, inheritSize: true, role: 'presentation' },
  },
];

const Page = () => (
  <div>
    <h1>Icons</h1>
    <p>
      An icon! To control its color, set color on a parent element, and it will
      be inherited.
    </p>
    <Demo component={Icon} presets={iconPresets} />
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Page;
