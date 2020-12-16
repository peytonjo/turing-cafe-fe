import React, { Component } from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const = { id, name, date, time, number} = this.props
    return (
      <section className="user-card">
        <h1>{name}</h1>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>number of guests: {number}</p>
      </section>
    )
  }
}

export default Card;