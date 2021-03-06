import React from 'react';
import NewMessageForm from './new_message_form';

class MessagesArea extends React.Component {
  constructor(props) {
    super(props);

    App.cable.subscriptions.create(
      { channel: 'UsersChannel' },
      {
        received: (user) => {
          return this.props.receiveUser(user)
        }
      }
    )
  } 

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchMessages(this.props.channelId);
    this.props.fetchUsers();
  }

  componentDidUpdate(nextProps) {
    if (this.props.channelId !== nextProps.match.params.channelId) {
      this.props.fetchMessages(this.props.channelId);
      this.props.fetchUsers();
    }
  }

  timeStamp(message) {
    let time = new Date(message.created_at);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let amOrPm = "AM";

    if (hours > 12) {
      hours = hours - 12;
      amOrPm = "PM"
    }


    return `${hours}:${minutes} ${amOrPm}`;
  }

  orderedMessages(messages) {
    if (messages) {
      const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      return sortedMessages.map(message => (
        <li key={message.id}>
          <span className="username">{this.props.users[message.author_id].username} </span>
          <span className="timestamp">{this.timeStamp(message)}</span> 
          <p className="body">{message.body}</p> 
          <br />
        </li>
      ))
    }
  };

  render() {
    if (this.props.channel && this.props.messages) {
      return (
        <div className="messages-area">
          <h2>{this.props.channel.name}</h2>
          <ul>{this.orderedMessages(this.props.messages)}</ul>
          <NewMessageForm className="message-form" fetchChannels={this.props.fetchChannels} receiveMessage={this.props.receiveMessage} channelName={this.props.channel.name} fetchMessages={this.props.fetchMessages} channelId={this.props.channelId} createMessage={this.props.createMessage} currentUser={this.props.currentUser} />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default MessagesArea;