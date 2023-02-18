import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Home from './Home'
import { Button, Descriptions } from 'antd'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
function EmployeeDetail() {
  const [employee, setEmployee] = useState<IEmployee>()
  const id = parseInt(useParams().id!)
  const navigate = useNavigate()
  console.log(id)

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((resp) => {
        setEmployee(resp.data)

        console.log(resp.data, ' respone')
      })
      .catch((err: Error) => {
        throw new Error(err.message)
      })

    return () => {
      // setEmployee({})
    }
  }, [id])
  // Add a Loader in the function if the data isn't loaded show the loader
  // console.log(employee)

  const Data: JSX.Element = employee ? (
    <Home>
      <Button style={{ width: '80px' }} onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <div>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="email">
            {employee.email}
          </Descriptions.Item>
          <Descriptions.Item label="name">
            {employee.name}
          </Descriptions.Item>
          <Descriptions.Item label="phone">
            {employee.phone}
          </Descriptions.Item>
          <Descriptions.Item label="username">
            {employee.username}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Home>
  ) : (
    <>Loader</>
  )

  return Data
}

export default EmployeeDetail
