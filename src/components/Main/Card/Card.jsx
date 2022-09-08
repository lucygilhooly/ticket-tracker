import React from 'react'
import "./Card.scss"
import Counter from './Counter/Counter';
import counterValue from '../../../assets/data/counterValue';

const Card = (props) => {
  const {name, role} = props;
  return (
    <>
    <div className='employeeCard'>
      <h2>Name: {name} </h2>
      <h2>Role: {role}</h2>
      <Counter value = {counterValue}/>
    </div>
    </>
  )
}
export default Card