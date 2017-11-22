import React from 'react'
import Link from 'gatsby-link'
import BradFrostQuote from '../../components/BradFrostQuote'

const Page = () => (
  <div>
    <h1>Templates</h1>
    <BradFrostQuote link="http://atomicdesign.bradfrost.com/chapter-2/#templates">
      page-level objects that place components into a layout and articulate the
      design’s underlying content structure
    </BradFrostQuote>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Page
