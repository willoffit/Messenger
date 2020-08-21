import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import React from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../actions/channel_actions';

export default ({store}) => (
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ActionCableProvider>
)