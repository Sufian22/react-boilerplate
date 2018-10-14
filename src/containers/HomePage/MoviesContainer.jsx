import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';

export default class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Grid container direction="row" justify="center">
        {movies &&
          movies.length > 0 &&
          movies.map(function(movie, index) {
            return <MovieCard key={index} movie={movie} />;
          })}
      </Grid>
    );
  }
}
