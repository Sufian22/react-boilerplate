/**
 * Discover the movies from API
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { DISCOVER_MOVIES } from './constants';
import { discoverMoviesSuccess, discoverMoviesError } from './actions';

import request from '../../utils/request';

const apiBaseURL = 'https://api.themoviedb.org/3';

/**
 * Discover movies request/response handler
 */
export function* discoverMovies() {
  const requestURL = `${apiBaseURL}/discover/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const movies = response.results;
    yield put(discoverMoviesSuccess(movies));
  } catch (err) {
    yield put(discoverMoviesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* discoverMoviesData() {
  // Watches for DISCOVER_MOVIES actions and calls discoverMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(DISCOVER_MOVIES, discoverMovies);
}
