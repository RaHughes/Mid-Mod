import React, { Component } from 'react';
import { getData, postData } from '../apiCalls';
import LandingForm from '../LandingForm/LandingForm';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
  super()
    this.state = {
      reservations: []
  }
}
  componentDidMount() {
    getData()
    .then(reserves => this.setState({ reservations: reserves }))
    .catch(err => console.log(err))
  }

  addReserve = (newObj) => {
    postData(newObj)
    .then(this.setState({ reservations: [...this.state.reservations, newObj] }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <LandingForm addReserve={this.addReserve}/>
          <CardContainer reservations={this.state.reservations}/>
        </div>
        <div className='resy-container'>
        </div>
      </div>
    )
  }
}

export default App;
