/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Welcome to, CodeInspect!`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
          resolve : "gatsby-source-filesystem",
          options : {
              name: `articles`,
              path: `${__dirname}/articles`,

          }
      },
      {
          resolve : "gatsby-source-filesystem",
          options : {
              name: `images`,
              path: `${__dirname}/images`,

          }
      },
      {
          resolve: `gatsby-plugin-mdx`,
          options: {
              extensions: [`.mdx`, `.md`],
              gatsbyRemarkPlugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 630,
                      },
                  },
                  /*
                  {
                      resolve: `gatsby-remark-responsive-iframe`,
                      options: {
                          wrapperStyle: `margin-bottom: 1.0725rem`,
                      },
                  },

                   */
              ],

          },
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      "gatsby-remark-images",
      "gatsby-plugin-postcss"
  ],
}
