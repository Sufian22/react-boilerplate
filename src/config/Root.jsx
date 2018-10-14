import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from '../containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../layouts/Layout';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#292b2d',
      main: '#2a4863',
      dark: '#a4c8e1',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const Root = ({ store }) => (
  <MuiThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
