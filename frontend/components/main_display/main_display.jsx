import React from 'react';
import Header from './header';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Header logout={this.props.logout} />
    )
  }
}

export default MainDisplay;