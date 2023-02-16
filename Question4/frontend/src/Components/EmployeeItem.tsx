import React from 'react'
import IEmployee from '../Interfaces/Employee'
const EmployeeItem = ({ name }: IEmployee) => {
  return <div>EmployeeItem {name} </div>
}

export default EmployeeItem
