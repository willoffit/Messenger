import { Route } from 'react-router-dom';
import loginFormContainer from './auth/login_form_container';
import signupFormContainer from './auth/signup_form_container';
import React from 'react';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';

export default (props) => (
  <div>
    <Route exact path="/" component={NavBarContainer}/>
    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signupFormContainer}/>
  </div>
)