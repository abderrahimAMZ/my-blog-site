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
              ],

          },
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      "gatsby-remark-images",
      "gatsby-plugin-postcss",
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 800,
                      },
                  },
                  {
                      resolve: `gatsby-remark-table-of-contents`,
                      options: {
                          exclude: "Table of Contents",
                          tight: false,
                          ordered: false,
                          fromHeading: 1,
                          toHeading: 6,
                          className: "table-of-contents"
                      },
                  },
                  `gatsby-remark-autolink-headers`,
              ],
          },
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,

  ],
}
