import React from 'react'
import Link from 'gatsby-link'
import { Breadcrumb, Grid, Image } from 'semantic-ui-react'

const MovieTemplate = ({ data }) => {
  const { moviesJson: movie } = data

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Breadcrumb>
            <Breadcrumb.Section as={Link} to='/' link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section as={Link} to={`/movies/${movie.Year}`} link>{movie.Year}</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{movie.Title}</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={movie.Poster} alt='poster' />
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>{movie.Title}</h1>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MovieTemplate

export const pageQuery = graphql`
  query MovieTemplate ($id: String!) {
    moviesJson(id: { eq: $id }) {
      Title
      Year
      Poster
      Actors
      Plot
    }
  }
`
