import React from 'react'
import "./Card.scss"
import Counter from './Counter/Counter'

const Card = () => {
  return (
    <div className='card'>
      <h2 className='card__name'>Name:</h2>
      <h2 className='card__role'>Role:</h2>
      <Counter />
    </div>
  )
}

export default Card