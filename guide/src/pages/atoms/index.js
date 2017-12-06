import React from 'react';
import { Link } from 'components/Elements';
import BradFrostQuote from 'components/BradFrostQuote';

const Page = () => (
  <div>
    <h1>Atoms</h1>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#atoms">
      the foundational building blocks that comprise all our user interfaces
    </BradFrostQuote>
    <ul>
      <li>
        <Link to="/atoms/button">Button</Link>
      </li>
      <li>
        <Link to="/atoms/icon">Icon</Link>
      </li>
      <li>
        <Link to="/atoms/colors">Colors</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Page;
