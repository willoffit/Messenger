import { logout, clearLoginErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import MainDisplay from './main_display';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
