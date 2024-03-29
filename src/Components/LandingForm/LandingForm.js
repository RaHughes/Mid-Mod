import React, { Component } from 'react';
import './LandingForm.css'

class LandingForm extends Component {
  constructor(props) {
    super(props)
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

  submitReserve = () => {
    const newCard = { ...this.state, id: Date.now()}
    this.props.addReserve(newCard)
  }

  render() {
    return (
      <div className='landing_form'>
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
      <button onClick={this.submitReserve}>Make Reservation</button>
      </div>
    )
  }
}

export default LandingForm