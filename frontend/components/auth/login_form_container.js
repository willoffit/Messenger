import { login, clearLoginErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearLoginErrors: () => dispatch(clearLoginErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
