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

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div className="signup-form">
        <Link to="/">Back to homepage</Link>
        <br />
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="username-input">      
            <input type="text" onChange={this.update("username")} value={this.state.username} />
          </label>
          <br />
          <label className="email-input">
            <input type="text" onChange={this.update("email")} value={this.state.email} />
          </label>
          <br />
          <label className="password-input">
            <input type="password" onChange={this.update("password")} value={this.state.password} />
          </label>
          <br />
          <section className="submit-button">
            <button>Continue</button>
          </section>
        </form>
        <ul className="errors">
          {this.props.errors.login.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SignupForm;