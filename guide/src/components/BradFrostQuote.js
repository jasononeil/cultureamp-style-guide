import React from 'react'
import Link from 'gatsby-link'

const BradFrostQuote = ({ children, link }) => (
  <blockquote>
    {children}
    <cite>
      - Brad Frost, <Link to={link}>Atomic Design</Link>
    </cite>
  </blockquote>
)

export default BradFrostQuote
