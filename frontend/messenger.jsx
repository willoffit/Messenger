import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchChannels } from './actions/channel_actions';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { 
          1: { username: "demoUser", password: "123456" },
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    preloadedState = {
      entities: {
        users: {
          1: { username: "demoUser", password: "123456" }
        }
      },
    };
    store = configureStore(preloadedState);
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchChannels = fetchChannels;
  ReactDOM.render(<Root store={store}/>, root);
});