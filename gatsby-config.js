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
          resolve: `gatsby-plugin-google-gtag`,
          options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                  "G-KZ8HGW8X4M",
                  "GTM-KLB3R352" 
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                  optimize_id: "OPT_CONTAINER_ID",
                  anonymize_ip: true,
                  cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                  // Puts tracking script in the head instead of the body
                  head: true,
                  // Setting this parameter is also optional
                  respectDNT: true,
                  // Avoids sending pageview hits from custom paths
                  exclude: ["/preview/**", "/do-not-track/me/too/"],
                  // Defaults to https://www.googletagmanager.com
                  origin: "YOUR_SELF_HOSTED_ORIGIN",
                  // Delays processing pageview events on route update (in milliseconds)
                  delayOnRouteUpdate: 0,
              },
          },
      },
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
                      options:{
                            background: "#000",
                            zIndex: 1000,
                            margin: 40,
                      }

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
