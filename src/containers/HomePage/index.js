import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import Grid from '@material-ui/core/Grid';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import { discoverMovies } from './actions';
import reducer from './reducer';
import saga from './saga';

const styles = theme => ({
  root: {},
  button: {
    margin: theme.spacing.unit * 4,
    color: 'white',
  },
  card: {
    maxWidth: 500,
    margin: theme.spacing.unit * 2,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
    height: 250,
  },
});

class HomePage extends Component {
  onClick = () => {
    const { dispatch } = this.props;
    dispatch(discoverMovies());
  };

  render() {
    const { classes, movies } = this.props;

    return (
      <div>
        <Grid container direction="row" justify="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onClick}
              className={classes.button}
            >
              Discover Movies
            </Button>
          </Grid>
        </Grid>
        <MoviesContainer movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const homeState = state.get('home');
  const movies = homeState.get('movies');
  const loading = homeState.get('loading');
  const error = homeState.get('error');

  return {
    movies,
    loading,
    error,
  };
};

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

// export default withStyles(styles)(HomePage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(HomePage);
