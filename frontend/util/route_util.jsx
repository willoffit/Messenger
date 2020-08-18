import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
})

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )} />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));