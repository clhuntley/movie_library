import React from 'react'
import Link from 'gatsby-link'
import { Image, List } from 'semantic-ui-react'
import _kebabCase from 'lodash.kebabcase'

const IndexPage = ({ data }) => {
  const { allMoviesJson: movies } = data
  return (
    <List size='massive' divided verticalAlign='middle'>
      {movies.edges.map(({ node: movie }) => (
       <List.Item key={movie.id} as={Link} to={`/movies/${movie.Year}/${_kebabCase(movie.Title)}`}>
          <Image src={movie.Poster} avatar alt='poster' />
          <List.Content>
            <List.Header>{movie.Title}</List.Header>
          </List.Content>
       </List.Item>
      ))}
    </List>
  )
}

export default IndexPage

export const queryPage = graphql`
  query IndexPage {
    allMoviesJson (sort: {fields: [Title, Year]}) {
      edges {
        node {
          id
          Title
          Year
          Poster
        }
      }
    }
  }
`
