const path = require('path');
const _kebabCase = require('lodash.kebabcase')


exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  const movieTemplate = path.resolve(`src/templates/movie.js`)
  const yearTemplate = path.resolve(`src/templates/year.js`)

  const movies = graphql(`{
    allMoviesJson {
      edges {
        node {
          id
          Title
          Year
        }
      }
      years: group (field: Year) {
        fieldValue
      }
    }
  }`)
  .then(movies => {
    if (movies.errors) {
      throw new Error(movies.errors)
    }

    movies.data.allMoviesJson.edges.forEach(({node: movie}) => {
      createPage({
        path: `/movies/${movie.Year}/${_kebabCase(movie.Title)}`,
        component: movieTemplate,
        context: {
          id: movie.id
        }
      })
    })

    movies.data.allMoviesJson.years.forEach(({fieldValue: year}) => {
      createPage({
        path: `/movies/${year}`,
        component: yearTemplate,
        context: {
          year: year
        }
      })
    })
  })

}
