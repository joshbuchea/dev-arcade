module.exports = {
  siteMetadata: {
    title: 'Dev Arcade',
    description: 'Play Games, Level Up',
    siteUrl: 'https://dev-arcade.netlify.com'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-theme-jxnblk',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Press Start 2P'
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148807247-1'
      }
    },
  ]
}
