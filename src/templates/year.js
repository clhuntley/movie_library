import React from 'react'
import Link from 'gatsby-link'
import { Breadcrumb, Grid, Image, List } from 'semantic-ui-react'
import _kebabCase from 'lodash.kebabcase'

const YearTemplate = ({ data, pathContext }) => {
  const movies = data.allMoviesJson.edges.filter(e => e.node.Year === pathContext.year)
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Breadcrumb>
            <Breadcrumb.Section as={Link} to='/' link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{pathContext.year}</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <h1>{pathContext.year}</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <List size='massive' divided verticalAlign='middle'>
            {movies.map(({ node: movie }) => (
              <List.Item key={movie.id} as={Link} to={`/movies/${movie.Year}/${_kebabCase(movie.Title)}`}>
                  <Image src={movie.Poster} avatar alt='poster' />
                  <List.Content>
                    <List.Header>{movie.Title}</List.Header>
                  </List.Content>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default YearTemplate

export const queryPage = graphql`
  query YearTemplate {
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
