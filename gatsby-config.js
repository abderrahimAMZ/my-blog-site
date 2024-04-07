/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Code4Coding, Where we code for fun!`,
    siteUrl: `https://code4coding.tech`,
    description: `Welcome to Code4Coding, where we explore this world and make the hard easy!`,
    image: `images/icons8-code-64.png`,
      twitterUsername: `@Abderrahim_AMZ`,
  },
  plugins: [
      {
          resolve : "gatsby-plugin-anchor-links",
          options : {
              offset: -100,
          },
      },
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
                          maxWidth: 650,
                          linkImagesToOriginal: false,
                      },
                  },
              ],

          },
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      "gatsby-plugin-postcss",
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [

                  `gatsby-remark-color-highlight`,
                  `gatsby-remark-autolink-headers`,
                    `gatsby-remark-prismjs`,

                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 650,
                          linkImagesToOriginal: false,
                      }

                  },
                  {
                      resolve:`gatsby-remark-images-medium-zoom`,
                      options:{}

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
              ],
          },
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `minimal-ui`,
              icon: `images/icons8-code-64.png`, // This path is relative to the root of the site.
          },
      },
      {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
              fonts: [
                  `cambay\:400,700`,
                  `arvo\:400,700`,
                  `ubuntu mono\:400,700`,
              ],
          },
      },
  ],
}
