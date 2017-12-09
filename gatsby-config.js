const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Hale Movie Library',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'movies',
        path: path.join(__dirname, 'data/')
      }
    },
    'gatsby-transformer-json'
  ],
}
