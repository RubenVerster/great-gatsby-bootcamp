/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `The Portfolio | Ruben Verster`,
    author: "Ruben Verster",
  },
  plugins: [
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    { resolve: "gatsby-plugin-sass" },
    //when you setup a plugin as an object, you have to provide the name using the 'resolve' label
    //and the benefit of doing it in an object is that you can expand on the plugin  object and provide the filesystem with what it needs (here it is the options object (on options, you have to provide the string and path to the directory on the filesystem ))
    //with this little bit of setup, we tell gatsby to source content from the filesystem
    //we replace this later with contentful API

    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src/` },
    },
  ],
}
