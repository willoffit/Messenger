import React from 'react';
import NewChannelForm from './new_channel_form';
import MessagesArea from './messages_area';
import Cable from './cables';
import { Link } from 'react-router-dom';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleReceivedChannel = this.handleReceivedChannel.bind(this);
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  };

  handleReceivedChannel(response) {
    const { channel } = response;
    this.props.receiveChannel(channel);
  };

  handleReceivedMessage(response) {
    const { message } = response;
    this.props.receiveMessage(message);
  };

  mapChannels(channels) {
    return Object.values(channels).map((channel, idx) => {
      return (
        <li key={idx}>
          <Link to={`/client/${channel.id}`} className="channel-link">{channel.name}</Link>
        </li>
      );
    });
  };

  channelToggle() {
    let channels = document.getElementById("list");
    let rightArrow = document.getElementById("right-arrow");
    let downArrow = document.getElementById("down-arrow");

    if (channels.classList.contains("revealed")) {
      channels.classList.remove("revealed");
      rightArrow.classList.add("revealed");
      downArrow.classList.remove("revealed");
    } else { 
      channels.classList.add("revealed");
      rightArrow.classList.remove("revealed");
      downArrow.classList.add("revealed");
    }
  }

  render() {
    return (
      <div className="sidebar">
        <section className="top-box">
          <h1>{this.props.currentUser.username}</h1>
          </section>
        <section className="channel-list">
          <div className="channel-combo">
            <section id="right-arrow" className="revealed" onClick={this.channelToggle}>
              <i class="fas fa-caret-right"></i>
            </section>
            <section id="down-arrow" onClick={this.channelToggle}>
              <i class="fas fa-caret-down"></i>
            </section>
            <h2 className="channel-title" onClick={this.channelToggle}>Channels</h2>
          </div>
          <br />
          <ul id="list">{this.mapChannels(this.props.channels)}</ul>
          {/* <NewChannelForm createChannel={this.props.createChannel} /> */}
        </section>
        <section className="messages-area">
          {this.props.channels[this.props.channelId] ? (
            <MessagesArea fetchMessages={this.props.fetchMessages} channel={this.props.channels[this.props.channelId]} activeChannelMessages={this.props.messages} createMessage={this.props.createMessage} currentUser={this.props.currentUser} />
          ) : null}
        </section>
      </div>
    );
  };
}

export default ChannelsList;
