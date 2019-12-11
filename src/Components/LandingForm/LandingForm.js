import React, { Component } from 'react';

class LandingForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  render() {
    return (
      <div>
      <input type='text' placeholder='Name'></input>
      <input type='text' placeholder='Date (MM/DD)'></input>
      <input type='text' placeholder='Time'></input>
      <input type='text' placeholder='Number of Guests'></input>
      <button>Make Reservation</button>
      </div>
    )
  }
}

export default LandingForm