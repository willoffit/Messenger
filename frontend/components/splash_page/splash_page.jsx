import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Redirect to={`/client/76`} />
      )
    } else {
      return (
        <div className="splash-page">
          <ul className="navbar">
            <Link className="icon-link" to="/">
              <ul className="icons">
                <li><img src={window.logo} alt="Messenger Logo" className="logo" /></li>
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
          <section className="main-page">
            <h1>Messenger is where work happens</h1>
            <p>With channels in Messenger, you and your team know where to go to
              ask questions, share updates and stay in the loop.
            </p>
          </section>
        </div>
        
      )
    }
  }
}

export default SplashPage;