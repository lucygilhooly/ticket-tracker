import React from 'react'
import "./Counter.scss"

const Counter = () => {
  return (
    <div className='counter'>
        <h3 className='counter__title'>Counter</h3>
        <output className='counter__output'>0</output>
        <button className='counter__minus'>-</button>
        <button className='counter__add'>+</button>
    </div>
  )
}

export default Counter