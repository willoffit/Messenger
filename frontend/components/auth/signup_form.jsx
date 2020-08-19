import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('username');
    input.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  errors() {
    if (this.props.errors.login.length > 0) {
      return (
        <div className="errors">
          <i className="fal fa-exclamation-triangle"></i>
          <ul>
            {this.props.errors.login.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      )
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="signup-form">

        <Link to="/" className="homepage-link" onClick={this.props.clearLoginErrors}>
          <ul className="icons">
            <li><img src={window.logo} alt="Messenger Logo" className="logo" /></li>
            <li className="title">messenger</li>
          </ul>
        </Link>

        <br />
        <h1>Enter a username, email, and password</h1>
        <p>We suggest using the <span>email address you use at work.</span></p>
        <div className="error-holder">
          {this.errors()}
        </div>
        <form onSubmit={this.handleSubmit}>
          <ul className="boxes">
            <li className="username-input">      
              <input id="username" type="text" placeholder="username" onChange={this.update("username")} value={this.state.username} />
            </li>
            <br />
            <li className="email-input">
              <input type="text" placeholder="name@work-email.com" onChange={this.update("email")} value={this.state.email} />
            </li>
            <br />
            <li className="password-input">
              <input type="password" placeholder="password" onChange={this.update("password")} value={this.state.password} />
            </li>
            <br />
            <li className="submit-button">
              <button>Continue</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default SignupForm;