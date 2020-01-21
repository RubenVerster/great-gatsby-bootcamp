const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    //this fetches all the slugs from your files and removes the file extension
    const slug = path.basename(node.fileAbsolutePath, ".md")

    console.log(
      `### ### ### ### ### \nMarkdownRemark Node Found!!! \n### ### ### ### ### \n
      ${JSON.stringify(slug, undefined, 2)}`
    )
    // add slug to your markdown node
    createNodeField({ node, name: "slug", value: slug })
  }
}
