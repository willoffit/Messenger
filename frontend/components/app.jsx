import { Route, Switch, Redirect } from 'react-router-dom';
import loginFormContainer from './auth/login_form_container';
import signupFormContainer from './auth/signup_form_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import mainDisplayContainer from './main_display/main_display_container';

export default (props) => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/client" component={mainDisplayContainer} />
      <AuthRoute exact path="/login" component={loginFormContainer} />
      <AuthRoute exact path="/signup" component={signupFormContainer} />
      <Route exact path="/" component={NavBarContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
)