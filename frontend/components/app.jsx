import { Route } from 'react-router-dom';
import loginFormContainer from './auth/login_form_container';
import signupFormContainer from './auth/signup_form_container';
import React from 'react';

export default () => (
  <div>
    <header>

    </header>
    <Route exact path="/" />
    <Route path="/login" component={loginFormContainer}/>
    <Route path="/signup" component={signupFormContainer}/>
  </div>
)