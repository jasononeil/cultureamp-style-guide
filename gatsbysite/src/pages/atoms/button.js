import React from 'react';
import Link from 'gatsby-link';
import Demo from 'components/Demo';
import Button from '../../../../components/Button/Button.js';

const buttonPresets = [
  { name: 'Primary', props: { children: 'Button text', primary: true } },
  {
    name: 'Primary disabled',
    props: { children: 'Button text', disabled: true },
  },
  {
    name: 'Primary fixed',
    props: { children: 'Button text', fixed: true },
  },
  {
    name: 'Primary mid',
    props: { children: 'Button text', size: 'mid' },
  },
  {
    name: 'Destructive',
    props: { children: 'Button text', destructive: true },
  },
  {
    name: 'Secondary',
    props: { children: 'Button text', primary: false },
  },
  {
    name: 'Secondary disabled',
    props: { children: 'Button text', primary: false, disabled: true },
  },
  {
    name: 'Secondary mid',
    props: { children: 'Button text', size: 'mid', primary: false },
  },
  {
    name: 'Secondary small',
    props: { children: 'Button', size: 'small', primary: false },
  },
  {
    name: 'Ghost',
    props: { children: 'Button text', darkBackground: true },
  },
  {
    name: 'Ghost disabled',
    props: {
      children: 'Button text',
      disabled: true,
      darkBackground: true,
    },
  },
];

const Page = () => (
  <div>
    <h1>Buttons</h1>
    <p>
      Buttons make common actions immediately visible and easy to perform with
      one click or tap. They can be used for any type of action, including
      navigation.
    </p>
    <Demo component={Button} presets={buttonPresets} />
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Page;
