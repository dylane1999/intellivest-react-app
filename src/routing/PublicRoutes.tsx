import React from 'react'
import { Route, Switch } from "react-router-dom"
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import WelcomePage from '../pages/WelcomePage';

const PublicRoutes = () => {
    return (
        <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route path="/" component={WelcomePage} />
      </Switch>
    )
}

export default PublicRoutes
