import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Button, Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import IEmployee from '../Interfaces/Employee'

interface EmployeeItemProps {
  employee: IEmployee
  deleteEmployee: (id: number) => void
}

const EmployeeItem = ({ employee, deleteEmployee }: EmployeeItemProps) => {
  const { id, name } = employee
  const handleDelete = () => {
    deleteEmployee(id)
    console.log('Delete employeeItem ')
  }

  return (
    <Card style={{ margin: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip placement="bottomLeft" title="Click to see details">
          <Link style={{ width: '80%' }} to={`/employee/${id}`}>
            <p style={{ fontSize: '1.5rem' }}> {name} </p>
          </Link>
        </Tooltip>
        <div
          style={{
            width: '18%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to={`/edit/${id}`}>
            <Button
              icon={<EditOutlined />}
              style={{ width: '100px', fontWeight: '800' }}
              type="primary"
            >
              Edit{' '}
            </Button>{' '}
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: '100px',
              fontWeight: '800',
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default EmployeeItem
