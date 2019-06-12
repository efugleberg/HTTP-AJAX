import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => alert('you have an error', err))
  }

  postNewFriend = friend => {
    axios
    .post('http://localhost:5000/friends', friend)
    .then(response => {
      console.log("Response:", response)
      this.setState({ friends: [...this.state.friends, friend] })
    })
    .catch(error => console.log("Error: Your postFriendToServer Failed", error))
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World</h1>
        <FriendList friends={this.state.friends}/>
        <FriendForm />
      </div>
    );
  }
}

export default App;
