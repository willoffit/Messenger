import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_MESSAGE:
      let newState = {...state};
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_MESSAGES:
      newState = {};
      Object.values(action.messages).forEach(message => {
        newState[message.id] = message;
      });
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;