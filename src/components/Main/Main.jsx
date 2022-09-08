import React from 'react'
import Card from './Card/Card'
import "./Main.scss"

const Main = (props) => {
  const {teamArr} = props;

  const employeesJSX = teamArr.map((employee, index) => {
    return (
      <div key={index}>
        <Card name={employee.name} role={employee.role}/>
      </div>
    )
  })
  return (
    <section className= 'employeeGrid'>
    {employeesJSX}
    </section>
  )
}

export default Main