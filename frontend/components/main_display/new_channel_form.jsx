import React from 'react';

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      channel_type: ""
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createChannel(this.state);
  };

  render() {
    return (
      <div className="newChannelForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Channel:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.channel_type}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default NewChannelForm;