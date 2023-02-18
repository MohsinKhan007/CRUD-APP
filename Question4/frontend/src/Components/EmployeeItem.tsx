import { Card, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import IEmployee from '../Interfaces/Employee'

interface EmployeeItemProps {
  employee: IEmployee
  deleteEmployee: (id: string) => void
}

const EmployeeItem = ({ employee, deleteEmployee }: EmployeeItemProps) => {
  const { id, name } = employee
  const handleDelete = () => {
    deleteEmployee(id)
    console.log('Delete employeeItem ')
  }

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/employee/${id}`}>
          <div> EmployeeItem {name} </div>
        </Link>
        <div>
          <Link to={`/edit/${id}`}>
            <Button type="primary">Edit</Button>{' '}
          </Link>
          <Button
            onClick={handleDelete}
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default EmployeeItem
