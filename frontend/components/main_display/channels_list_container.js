import { connect } from 'react-redux';
import ChannelsList from './channels_list';
import { fetchChannels } from '../../actions/channel_actions';
import { messageSelector } from '../../reducers/entities/selectors';

const mapStateToProps = (state, ownProps) => ({
  channels: state.entities.channels,
  messages: messageSelector(state.entities.messages, ownProps.channelId),
  channelId: ownProps.channelId
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  receiveChannel: (channel) => dispatch(receiveChannel(channel)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  createChannel: (channel) => dispatch(createChannel(channel)),
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
