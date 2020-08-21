import React from 'react';
import { Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main-page-header">
        <button id="logout-button" onClick={this.props.logout}>
          <i className="fal fa-sign-out"></i>
          <span>   </span>
          Log Out
        </button>
      </header>
    )
  }
}

export default Header;