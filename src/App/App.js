import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Card /> 
        </div>
      </div>
    )
  }
}

export default App;
