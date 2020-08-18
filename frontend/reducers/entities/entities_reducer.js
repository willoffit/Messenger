import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

export default combineReducers({
  // messages: messagesReducer,
  users: usersReducer,
  // channels: channelsReducer,
  // channelParticipants: channelParticipantsReducer
});