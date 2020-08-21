import React from 'react';

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      channel_id: this.props.channel_id
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ channel_id: nextProps.channel_id });
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
  };

  render() {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;