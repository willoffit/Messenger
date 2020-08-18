import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Log In',
  navLink: <Link to='/signup'>Sign up</Link>
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
