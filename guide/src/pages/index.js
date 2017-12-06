import React from 'react';
import { Link } from 'components/Elements';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/atoms/">Go to atoms page</Link>
  </div>
);

export default IndexPage;
