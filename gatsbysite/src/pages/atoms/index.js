import React from 'react'
import Link from 'gatsby-link'
import BradFrostQuote from '../../components/bradFrostQuote'

const Page = () => (
  <div>
    <h1>Atoms</h1>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#atoms">
      the foundational building blocks that comprise all our user interfaces
    </BradFrostQuote>
    <ul>
      <li>
        <Link to="atoms/button">Button</Link>
      </li>
      <li>
        <Link to="atoms/icon">Icon</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Page
