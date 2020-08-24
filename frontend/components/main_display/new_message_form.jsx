import React from 'react';

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
      channel_id: this.props.channel_id,
      author_id: this.props.currentUser.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ channel_id: nextProps.channel_id });
  };

  handleChange(e) {
    this.setState({ body: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state).then((res) => {
      App.cable.subscriptions.subscriptions[0].speak({
        message: res.message,
      });
    });
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