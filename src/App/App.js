import React, { Component } from 'react';
import './App.css';
import Users from '../Users/Users.js'
import { getAllUsers } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    getAllUsers() 
      .then(data => this.setState({
        users: data.users
      }))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Users /> 
        </div>
      </div>
    )
  }
}

export default App;
