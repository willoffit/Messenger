import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { fetchChannels } from '../../actions/channel_actions';
import NewChannelForm from './new_channel_form';
import MessagesArea from './messages_area';
import Cable from './cables';
import { Redirect } from 'react-router-dom';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      channels: this.props.channels,
      activeChannelId: this.props.channelId,
      activeChannelMessages: this.props.messages
    }
  }

  componentDidMount() {
    fetchChannels();
  };

  handleClick(id) {
    <Redirect to={`/client/${id}`} />
  };

  handleReceivedChannel(response) {
    const { channel } = response;
    this.props.receiveChannel(channel);
  };

  handleReceivedMessage(response) {
    const { message } = response;
    this.props.receiveMessage(message);
  };

  mapChannels(channels, handleClick) {
    return Object.values(channels).map(channel => {
      return (
        <li key={channel.id} onClick={() => handleClick(channel.id)}>
          {conversation.title}
        </li>
      );
    });
  };

  render() {
    const { channels, activeChannelId } = this.state;
    return (
      <div className="channel-list">
        <ActionCable
          channel={{ channel: 'ChannelsChannel' }}
          onReceived={this.handleReceivedChannel}
        />
        {this.state.channels.length ? (
          <Cable
            channels={channels}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>channel</h2>
        <ul>{this.mapChannels(channels, this.handleClick)}</ul>
        <NewChannelForm createChannel={this.props.createChannel} />
        {activeChannelId ? (
          <MessagesArea
            channel={channels[activeChannelId]} messages={this.props.activeChannelMessages} createMessage={this.props.createMessage}
          />
        ) : null}
      </div>
    );
  };
}

export default ChannelsList;
