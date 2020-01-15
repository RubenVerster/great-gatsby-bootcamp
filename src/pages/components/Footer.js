import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  //GraphQL query code
  //tag template literal
  //this pulls info from gatsby-config.js
  const data = useStaticQuery(graphql`
    query getSiteAuthor {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <footer>
        <p>Copyright {data.site.siteMetadata.author}</p>
      </footer>
    </div>
  )
}

export default Footer
