import React from 'react'
import './Card.css'

const Card = ({ name, date, time, number }) => {
return (
  <div className='card'>
    <h1>{name}</h1>
    <p>Date: {date}</p>
    <p>Time: {time}PM</p>
    <p>Number of Guests: {number}</p>
    <button>Cancel</button>
  </div>
)
}

export default Card;