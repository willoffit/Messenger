export const messageSelector = (messages, channelId) => (
  Object.values(messages).filter(message => {
    message.channel_id === channelId
  })
);