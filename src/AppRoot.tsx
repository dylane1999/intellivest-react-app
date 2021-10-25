/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WelcomePage from './pages/WelcomePage';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider,} from 'react-redux';
import store, {RootState} from './store';
import App from './App';


const AppRoot = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default AppRoot;
