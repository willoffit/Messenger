export const messageSelector = (messages, channelId) => {
  return Object.values(messages).filter(message => (
    message.channel_id === parseInt(channelId)
  ))
};