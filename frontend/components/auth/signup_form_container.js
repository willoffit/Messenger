import { signup, clearLoginErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Sign Up'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearLoginErrors: () => dispatch(clearLoginErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);