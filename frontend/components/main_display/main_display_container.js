import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import MainDisplay from './main_display';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
