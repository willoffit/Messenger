import { combineReducers } from 'redux';
import loginErrorsReducer from './login_errors_reducer';

export default combineReducers({
  login: loginErrorsReducer,
  // messageForm: messageFormErrorsReducer
});

