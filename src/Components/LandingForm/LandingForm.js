import React, { Component } from 'react';

class LandingForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
      <input 
        type='text' 
        placeholder='Name'
        value={this.state.name}
        name='name'
        onChange={this.handleChange}
        />
      <input 
        type='text' 
        placeholder='Date (MM/DD)'
        value={this.state.date}
        name='date'
        onChange={this.handleChange}
        />
      <input 
        type='text' 
        placeholder='Time'
        value={this.state.time}
        name='time'
        onChange={this.handleChange}
        />
      <input 
        type='text' 
        placeholder='Number of Guests'
        value={this.state.numeber}
        name='number'
        onChange={this.handleChange}
      />
      <button>Make Reservation</button>
      </div>
    )
  }
}

export default LandingForm