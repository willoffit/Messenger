import React from 'react';
import NewMessageForm from './new_message_form';

const MessagesArea = (props) => (
  <div className="messagesArea">
    <h2>{props.channel.name}</h2>
    <ul>{orderedMessages(props.activeChannelMessages)}</ul>
    <NewMessageForm fetchMessages={props.fetchMessages} channel_id={props.channel.id} createMessage={props.createMessage} currentUser={props.currentUser} />
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