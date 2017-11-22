import React from 'react'
import Link from 'gatsby-link'
import BradFrostQuote from '../../components/BradFrostQuote'

const Page = () => (
  <div>
    <h1>Organisms</h1>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#organisms">
      relatively complex UI components composed of groups of molecules and/or
      atoms and/or other organisms
    </BradFrostQuote>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Page
