import React from 'react';

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      channel_type: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
  };

  render() {
    return (
      <div className="new-channel-form">
        <form onSubmit={this.handleSubmit}>
          <label>New Channel:</label>
          <br />
          <input type="text" value={this.state.name} onChange={this.handleChange("name")} />
          <input type="text" value={this.state.channel_type} onChange={this.handleChange("channel_type")} />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

export default NewChannelForm;