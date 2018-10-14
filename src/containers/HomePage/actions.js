/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
  DISCOVER_MOVIES_ERROR,
} from './constants';

/**
 * Load the movies, this action starts the request saga
 *
 * @return {object} An action object with a type of DISCOVER_MOVIES
 */
export function discoverMovies() {
  return {
    type: DISCOVER_MOVIES,
  };
}

/**
 * Dispatched when the movies are discovered by the request saga
 *
 * @return {array}      An action object with a type of DISCOVER_MOVIES_SUCCESS passing the repos
 */
export function discoverMoviesSuccess(movies) {
  return {
    type: DISCOVER_MOVIES_SUCCESS,
    movies,
  };
}

/**
 * Dispatched when dicovering the movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of DISCOVER_MOVIES_ERROR passing the error
 */
export function discoverMoviesError(error) {
  return {
    type: DISCOVER_MOVIES_ERROR,
    error,
  };
}
