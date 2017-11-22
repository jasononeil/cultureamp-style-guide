import React from 'react'
import Link from 'gatsby-link'
import BradFrostQuote from '../../components/bradFrostQuote'

const Page = () => (
  <div>
    <h1>Molecules</h1>
    <Link to="/">Go back to the homepage</Link>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#molecules">
      relatively simple groups of UI elements functioning together as a unit
    </BradFrostQuote>
  </div>
)

export default Page
