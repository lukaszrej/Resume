import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='p-main'>
        <main>{children}</main>
        <footer>
          © 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
