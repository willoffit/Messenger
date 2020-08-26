import React from 'react';
import NewChannelForm from './new_channel_form';
import { Link } from 'react-router-dom';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
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
              <i className="fas fa-caret-right"></i>
            </section>
            <section id="down-arrow" onClick={this.channelToggle}>
              <i className="fas fa-caret-down"></i>
            </section>
            <h2 className="channel-title" onClick={this.channelToggle}>Channels</h2>
          </div>
          <br />
          <ul id="list">{this.mapChannels(this.props.channels)}</ul>
          {/* <NewChannelForm createChannel={this.props.createChannel} /> */}
        </section>
      </div>
    );
  };
}

export default ChannelsList;
