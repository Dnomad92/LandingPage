/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-my-landing-page`,
    siteUrl: `https://www.yourdomain.tld`,
    image: `/public/images/logo.png`
  },
  plugins: ['gatsby-plugin-postcss',
            'gatsby-plugin-image',
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            
    ]
};