import React from 'react';
import Header from './header';
import ChannelsListContainer from './channels/channels_list_container';
import MessageContainer from './messages/message_container';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <Header logout={this.props.logout} />
        <ChannelsListContainer />
        <MessageContainer />
      </div>
    )
  }
}

export default MainDisplay;