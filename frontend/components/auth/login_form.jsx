import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('username');
    input.focus();
    this.props.clearLoginErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({ username: "DemoUser", password: "123456" });
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
    return(
      <div className="login-form">
          <Link to="/" className="homepage-link" onClick={this.props.clearLoginErrors}>
            <ul className="icons">
              <li><img src={window.logo} alt="Messenger Logo" className="logo" /></li>
              <li className="title">messenger</li>
            </ul>
          </Link>
    
          <br />
          <h1>Sign in to your account</h1>
          <p>Enter your username and password</p>
          <div className="error-holder">
            {this.errors()}
          </div>
        <form onSubmit={this.handleSubmit}>
          <ul className="boxes">
            <li className="username-input">
              <input id="username" placeholder="username" type="text" onChange={this.update("username")} value={this.state.username} />
            </li>
            <br />
            <li className="password-input">
              <input placeholder="password" type="password" onChange={this.update("password")} value={this.state.password} />
            </li >
            <br />
            <li className="submit-button">
              <button>Continue</button>
            </li>
          </ul>
        </form>
        <br />
        <section className="submit-button demo">
          <button onClick={this.handleDemo}>Continue as a demo user</button>
        </section>
        <section className="redirect">
          Looking to sign up instead? <Link className="link" to="/signup">Sign up</Link>
        </section>
      </div>
    )
  }
}

export default LoginForm;