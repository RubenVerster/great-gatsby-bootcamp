/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Doobie Discussion",
    author: "Ruben Verster",
  },
  plugins: [
    "gatsby-plugin-sass",
    //when you setup a plugin as an object, you have to provide the name using the 'resolve' label
    //and the benefit of doing it in an object is that you can expand on the plugin  object and provide the filesystem with what it needs (here it is the options object (on options, you have to provide the string and path to the directory on the filesystem ))
    //with this little bit of setup, we tell gatsby to source content from the filesystem

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
