import React from 'react'

const MovieTemplate = ({ data }) => {
  const { moviesJson: movie } = data

  return <h1>{movie.Title}</h1>
}

export default MovieTemplate

export const pageQuery = graphql`
  query MovieTemplate ($id: String!) {
    moviesJson(id: { eq: $id }) {
      Title
    }
  }
`
