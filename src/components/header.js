import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='p-header'>
      <div>
          <h1><Link to="/">{siteTitle}</Link></h1>
      </div>
  </header>
)

export default Header
