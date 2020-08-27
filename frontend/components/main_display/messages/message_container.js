import { connect } from 'react-redux';
import { createMessage, fetchMessages, receiveMessage } from '../../../actions/message_actions';
import { messageSelector } from '../../../reducers/entities/selectors';
import MessagesArea from './messages_area';
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../../../actions/channel_actions';
import { fetchUsers } from '../../../actions/session_actions';
import { receiveUser } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  messages: messageSelector(state.entities.messages, ownProps.match.params.channelId),
  currentUser: state.entities.users[state.session.currentUserId],
  channelId: ownProps.match.params.channelId,
  channel: state.entities.channels[ownProps.match.params.channelId],
  users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  createMessage: (message) => dispatch(createMessage(message)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchUsers: () => dispatch(fetchUsers()),
  receiveUser: (user) => dispatch(receiveUser(user))
});

const MessageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagesArea));
export default MessageContainer;
