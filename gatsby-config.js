/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `my blog site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve : "gatsby-source-filesystem",
          options : {
              name: `blog`,
              path: `${__dirname}/blog`,

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
                  {
                      resolve: `gatsby-remark-responsive-iframe`,
                      options: {
                          wrapperStyle: `margin-bottom: 1.0725rem`,
                      },
                  },
                  `gatsby-remark-copy-linked-files`,
                  `gatsby-remark-smartypants`,
              ],
          },
      },
      "gatsby-remark-images",
  ],
}
