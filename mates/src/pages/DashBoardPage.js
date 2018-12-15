import React, { Component } from 'react';
import {Input, FormBtn} from "../components/Dashboard"
import { List, ListItem } from "../components/List";
import API from "../utils/API";

export default class Dashboard extends Component {

    state = {
        messages: [],
        input: ''
    }

ComponentDidMount() {
    this.loadMessages();
}

loadMessages = () => {
    API.getMessages()
    .then(res =>
    this.setState({ messages: res.data, message: " " })
)
.catch(err => console.log(err));
};



handleInputChange = event => {
    const { name, value } = event.target;
     console.log(event);
     console.log(this.state);
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    console.log(event)
    event.preventDefault();
    if (this.state.messages) {
        API.saveMessages({
            messages: this.state.input,
        })
        .then(res => {
            this.loadMessages()
        })
        .catch(err => console.log(err));
    }
};

render() {
    return (
        <div>
           
            <Input
            value={this.state.input}
            onChange={this.handleInputChange}
            name="input"
            placeholder="please type a message"
            />

            <FormBtn
            disabled={!(this.state.messages)}
            onClick={this.handleFormSubmit}
            />

            <div size="md-6 sm-12">
            <div>
              <h1>Our Messages</h1>
            </div>
            {this.state.messages.length ? (
              <List>
                {this.state.messages.map(message => {
                  return (
                  <ListItem 
                  key={message._id}>
                  <strong>
                  {message.messages} by {message.key}
                  </strong>
                  {/* </div> */}
                  </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
            
        </div>
    );
 }
}

// export default Dashboard;