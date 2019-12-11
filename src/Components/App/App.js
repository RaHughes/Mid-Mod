import React, { Component } from 'react';
import LandingForm from '../LandingForm/LandingForm'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <LandingForm />
          <CardContainer />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
