import React from 'react'
import Link from 'gatsby-link'

const Page = () => (
  <div>
    <h1>Atoms</h1>
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
