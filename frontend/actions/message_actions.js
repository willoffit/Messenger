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

export const fetchMessages = () => dispatch => (
  $.ajax({
    method: "GET",
    url: "api/channels/messages"
  }).then(messages => (dispatch(receiveMessages(messages))))
);

export const createMessage = message => dispatch => (
  $.ajax({
    method: "POST",
    url: `api/channels/${message.channel_id}/messages`,
    data: { message }
  }).then(message => dispatch(receiveMessage(message)))
);

