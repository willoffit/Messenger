export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
});

export const createMessage = (message) => dispatch => (
  fetch(`${API_ROOT}/api/messages`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(message)
  }).then(() => dispatch(receiveMessage(message)))
);