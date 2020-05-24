/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Centrum Rehabilitacji Bartosz Burzyński`,
        short_name: `Centrum Reh`,
        start_url: `/`,
        background_color: `#f1f2f4`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/styles/images/logo.png`,
      },
    },
  ],
  siteMetadata: {
      lang: "pl"
  }
}
