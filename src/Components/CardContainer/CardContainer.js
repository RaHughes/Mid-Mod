import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = ({ reservations }) => {
  const cards = reservations.map(card => {
    return  <Card 
      key={(Date.now() + Math.random())}
      id={card.id}
      name={card.name}
      date={card.date}
      time={card.time}
      number={card.number}
      />
  })

  return (
    <main className='card_container'>
      {cards}
    </main>
  )
}

export default CardContainer