import React from "react"
import { graphql } from "gatsby"
import Head from "../pages/components/Head"

import Layout from "../pages/components/Layout"

//this package allows us to use Contentful and graphql in a way as to generate react components from the data that has been saved in the JSON body of every blog post
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// using dynamic data from Contentful, so no need :P
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")

      body {
        json
      }
    }
  }
`

const Blog = props => {
  //an 'options' object is required for using images in your Contentful blog posts and remember to pass it in as the second argument in the 'documentToReactComponents' method
  //now we are able to determine how certain node types will render
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>

      {/* pass 'options' as the second argument */}
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
