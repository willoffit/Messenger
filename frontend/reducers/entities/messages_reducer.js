import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_MESSAGE:
      let newState = {...state};
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export default messagesReducer;