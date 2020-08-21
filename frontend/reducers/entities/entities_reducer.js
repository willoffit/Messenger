import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';

export default combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  channels: channelsReducer,
  // channelParticipants: channelParticipantsReducer
});