import React from 'react';
import Header from './header';
import ChannelsListContainer from './channels_list_container';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <Header logout={this.props.logout} />
        <ChannelsListContainer channelId={this.props.channelId} />
      </div>
    )
  }
}

export default MainDisplay;