/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WelcomePage from './pages/WelcomePage';
import {Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import store, {RootState} from './store';

import {PrivateRoutes} from './routing/PrivateRoutes';
import PublicRoutes from "./routing/PublicRoutes";

const App = () => {
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Switch>
        {authState.token != null ?  <PublicRoutes />: <PrivateRoutes /> }
      </Switch>
    </>
  );
};

export default App;
