import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import FriendList from './components/friend/FriendList'

class App extends Component {
    state = {
      friends: []
    };

    componentDidMount() {
        axios.get('http://localhost:4500/api/friends')
            .then(friend => {
                this.setState({friends: friend.data})
            })
            .catch(err => {
                console.log(err);
            })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <FriendList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
