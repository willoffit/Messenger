import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default (preloadedState = {}) => {
  let middleware = [thunk];

  // if (process.env.NOVE_ENV !== 'production') {
  //   middleware = [...middleware, logger];
  // }

  
  return createStore(RootReducer, preloadedState, applyMiddleware(...middleware));
}