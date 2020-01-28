import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
        <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
          <p>Copyright &copy; {data.site.siteMetadata.author}</p>
        </Link>
      </footer>
    </div>
  )
}

export default Footer
