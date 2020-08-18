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

  render() {
    return(
      <div className="login-form">
        
        <Link to="/" className="homepage-link">
          <ul className="icons">
            <li><img src={window.logo} alt="Messenger Logo" className="logo" /></li>
            <li className="title">messenger</li>
          </ul>
        </Link>

        {/* <input data-qa="signin_domain_input" aria-describedby="domain_hint" aria-invalid="false" aria-required="false" aria-label="" class="c-input_text c-input_text--large full_width margin_bottom_100" id="domain" name="domain" placeholder="your-workspace" type="text" value=""></input> */}
        
        <br />
        <h1>{this.props.formType}</h1>
        <p>Enter your username and password</p>
        <form onSubmit={this.handleSubmit}>
          <label className="username-input">
            <input placeholder="username" type="text" onChange={this.update("username")} value={this.state.username} />
          </label>
          <br />
          <label className="password-input">
            <input placeholder="password" type="password" onChange={this.update("password")} value={this.state.password} />
          </label >
          <br />
          <section className="submit-button">
            <button>Submit</button>
          </section>
        </form>
        <br />
        <button className="demo-user-button" onClick={this.handleDemo}>Sign in as a demo user</button>
        <ul>
          {this.props.errors.login.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default LoginForm;