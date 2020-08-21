import React from 'react';
import NewMessageForm from './new_message_form';

const MessagesArea = ({ channel: { id, name }, activeChannelMessages }) => (
  <div className="messagesArea">
    <h2>{name}</h2>
    <ul>{orderedMessages(activeChannelMessages)}</ul>
    <NewMessageForm channel_id={id} createMessage={this.props.createMessage} />
  </div>
)

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  return sortedMessages.map(message => (
    <li key={message.id}>{message.body}</li>
  ))
};