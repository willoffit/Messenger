import { connect } from 'react-redux';
import ChannelsList from './channels_list';
import { withRouter } from 'react-router-dom';
import { fetchChannels, createChannel, receiveChannel } from '../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  channels: state.entities.channels,
  channelId: ownProps.match.params.channelId,
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  receiveChannel: (channel) => dispatch(receiveChannel(channel)),
  createChannel: (channel) => dispatch(createChannel(channel)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelsList));
