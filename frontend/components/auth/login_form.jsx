import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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
    return(
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" onChange={this.update("username")} value={this.state.username} />
          </label>
          <label>Password:
            <input type="password" onChange={this.update("password")} value={this.state.password} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;