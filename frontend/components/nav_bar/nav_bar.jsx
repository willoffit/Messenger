import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <div>Welcome {this.props.currentUser.username}</div>
          <button onClick={this.props.logout}>Log Out</button>
          <h1>Messenger</h1>
        </div>
      )
    } else {
      return (
        <ul className="navbar">
          <ul className="icons">
            <li><img src={window.logo} alt="Messenger Logo" className="logo"/></li>
            <li className="title">messenger</li>
          </ul>
          <ul className="links-to-form">
            <li className="link">
              <Link to="/login">Log In</Link>
            </li>
            <li className="link">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </ul>
      )
    }
  }
}

export default NavBar;