import 'url-search-params-polyfill';

import axios from 'axios';

if (process.env.NODE_ENV == 'local') {
  axios.defaults.baseURL = 'http://localhost:8080/api';
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import AppRouter from './AppRouter';
import { store, history } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
