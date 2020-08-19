import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Redirect to="/client" />
      )
    } else {
      return (
        <ul className="navbar">
          <Link className="icon-link" to="/">
            <ul className="icons">
              <li><img src={window.logo} alt="Messenger Logo" className="logo"/></li>
              <li className="title">messenger</li>
            </ul>
          </Link>
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