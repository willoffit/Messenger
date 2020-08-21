export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  fetch(`${API_ROOT}/api/channels`)
    .then(res => res.json())
    .then(channels => (dispatch(receiveChannels(channels))))
);

export const createChannel = (channel) => dispatch => (
  fetch(`${API_ROOT}/api/channels`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(channel)
  }).then(() => dispatch(receiveChannel(channel)))
)

