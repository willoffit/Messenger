import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {...state};

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer