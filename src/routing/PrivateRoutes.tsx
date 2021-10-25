import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BottomNav from "../components/BottomNav"
import UserProfilePage from '../pages/UserProfilePage';
import styled from 'styled-components';
import Header from '../components/Header';
import WritePostPage from '../pages/WritePostPage';

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const PrivateRoutes = () => {
  return (
    <Root>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:id" component={UserProfilePage}/>
        <Route exact path="/write/post/:id" component={WritePostPage}/>
      </Switch>
      <BottomNav/>
    </Root>
  );
};
