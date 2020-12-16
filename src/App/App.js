import React, { Component } from 'react';
import './App.css';
import Users from '../Users/Users.js'
import { getAllRes } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    getAllRes() 
      .then(data => {
        this.setState({
          users: data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Users
            users={ this.state.users }
            />
        </div>
      </div>
    )
  }
}

export default App;
