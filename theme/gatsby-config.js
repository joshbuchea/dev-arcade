const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: 'Dev Arcade',
    description: 'Blog',
    siteUrl: 'https://dev-arcade.netlify.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/posts',
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed')
    },
  ]
}
