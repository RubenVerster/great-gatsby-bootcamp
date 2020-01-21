const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    //this fetches all the slugs from your files and removes the file extension
    const slug = path.basename(node.fileAbsolutePath, ".md")

    console.log(
      `### ### ### ### ### \nMarkdownRemark Node Found!!! \n### ### ### ### ### \n
      ${JSON.stringify(slug, undefined, 2)}
      ${JSON.stringify(node, undefined, 2)}`
    )
    // add slug to your markdown node
    createNodeField({ node, name: "slug", value: slug })
  }
}

//node api used from node-docs, createPages
//this gives us everything we need to dynamically generate new pages for the site

// here we export a createPage function, gatsby gets acces to the function and runs it the first time, we then destructure the function to get access to graphql and actions, graphql allows us to fetch some data (markdown nodes), and actions gets access to the action for creating a new page

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    //create pages for each blog
    createPage({
      //component youre trying to render, this is from the const above
      component: blogTemplate,

      //get path to template
      //where can you access the page were creating
      //like creating end points for users to access
      path: `/blog/${edge.node.fields.slug}`,

      //get markdown data
      //this contains info you can pass down to your template
      //we just need the slug
      //the slug contains data you can pass down to the template (date, body...)
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
