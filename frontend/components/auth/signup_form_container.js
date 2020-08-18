import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Sign Up'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);