/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
  DISCOVER_MOVIES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  movies: [],
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DISCOVER_MOVIES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('movies', []);
    case DISCOVER_MOVIES_SUCCESS:
      return state.set('movies', action.movies).set('loading', false);
    case DISCOVER_MOVIES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
