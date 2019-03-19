import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';

// Import root app
import Root from './config/Root';

import configureStore from './configureStore';

// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const NextRoot = require('./config/Root');
    ReactDOM.render(
      <NextRoot store={store} />,
      document.getElementById('root'),
    );
  });
}
