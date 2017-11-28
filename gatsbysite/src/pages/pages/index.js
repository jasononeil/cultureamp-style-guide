import React from 'react';
import Link from 'gatsby-link';
import BradFrostQuote from 'components/BradFrostQuote';

const Page = () => (
  <div>
    <h1>Pages</h1>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#pages">
      specific instances of templates that show what a UI looks like with real
      representative content in place
    </BradFrostQuote>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Page;
