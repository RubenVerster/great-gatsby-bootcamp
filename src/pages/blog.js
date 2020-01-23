import React from "react"
import Layout from "../pages/components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  //GraphQL query code
  //tag template literal
  //this pulls info from gatsby-config.js

  const data = useStaticQuery(graphql`
    query getPostsData {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Bud Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
