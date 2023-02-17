import React, { useEffect, useState } from 'react'
import { Button, List } from 'antd'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
import EmployeeItem from './EmployeeItem'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

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

  const deleteEmployee = (id: Number) => {
    // we will filter and call the api to delete on both sides
    console.log('Delete Employee Main ', id)
  }

  return (
    <Home>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: '15px',
        }}
      >
        <Link to={'/create'}>
          <Button>Create New</Button>
        </Link>
      </div>
      <List locale={{ emptyText: 'there is nothing to do' }}>
        {employee.map((emp: IEmployee) => {
          return (
            <EmployeeItem employee={emp} deleteEmployee={deleteEmployee} />
          )
        })}
      </List>
    </Home>
  )
}

export default EmployeeList
