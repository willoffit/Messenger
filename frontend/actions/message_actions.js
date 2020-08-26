export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
});

export const fetchMessages = (channelId) => dispatch => (
  $.ajax({
    method: "GET",
    url: `api/channels/${channelId}/messages`
  }).then(messages => (dispatch(receiveMessages(messages))))
);

export const createMessage = message => dispatch => (
  $.ajax({
    method: "POST",
    url: `api/messages`,
    data: { message }
  })
);

