import React, { useEffect, useState } from 'react'
import { List } from 'antd'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
import EmployeeItem from './EmployeeItem'

const EmployeeList = () => {
  const [employee, setEmployee] = useState<Array<IEmployee>>([])
  useEffect(() => {
    EmployeeService.getAll()
      .then((response: any) => {
        setEmployee(response.data)
      })
      .catch((e: Error) => {
        throw new Error(e.message)
      })
  }, [])

  return (
    <List locale={{ emptyText: 'there is nothing to do' }}>
      {employee.map((emp: IEmployee) => {
        return <EmployeeItem {...emp} />
      })}
    </List>
  )
}

export default EmployeeList
