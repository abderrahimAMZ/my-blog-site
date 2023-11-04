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
      "gatsby-plugin-sharp"
  ],
}
