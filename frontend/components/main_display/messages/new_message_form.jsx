import React from 'react';

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
      channel_id: this.props.channelId,
      author_id: this.props.currentUser.id
    };
    
    App.cable.subscriptions.create(
      { channel: 'ChatChannel' },
      { received: (message) => this.props.receiveMessage(message) }
    )
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.channelId);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ channel_id: nextProps.channelId });
  };

  handleChange(e) {
    this.setState({ body: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    var frm = document.getElementById('new-message-form');
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
  };

  render() {
    return (
      <div className="new-message-form">
        <form id="message-submit" onSubmit={this.handleSubmit}>
          <br />
          <input placeholder={`Message ${this.props.channelName}`}
            id="message-input"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
          /> 
          <div className="message-panel">
            <button id="message-submit" type="submit"><i className="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    );
  };
}

export default NewMessageForm;