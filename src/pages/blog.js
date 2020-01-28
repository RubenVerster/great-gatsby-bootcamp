import React from "react"
import Layout from "../pages/components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "./components/Head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  //GraphQL query code
  //tag template literal
  //this pulls info from gatsby-config.js

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />

      <h1>Bud Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
