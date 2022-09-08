import React from 'react'
import "./Counter.scss"
import { useState } from 'react';

const Counter = (props) => {
  const {value} = props
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    if (counter === value.legnth - 1) {
      setCounter(0);
    }else {
      setCounter(counter + 1);
    }
  };
  
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(value.legnth - 1)
    }else {
      setCounter(counter - 1)
    }
  };


  return (
    <div className='counter'>
     
        <h3 className='counter__title'>Counter</h3>
        <output className='counter__output'>{value[counter]}</output>
       <button className='counter__add'onClick={handleIncrement}>+</button> 
       <button className='counter__minus' onClick={handleDecrement}>-</button>
        
    </div>
  )
};

export default Counter
