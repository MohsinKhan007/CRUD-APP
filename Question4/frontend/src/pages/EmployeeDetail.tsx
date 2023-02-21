import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Home from './Home'
import { Button, Descriptions } from 'antd'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
import useLoaderHook from '../utils/UseLoaderHook'
import { initialValue } from '../Interfaces/Employee'
import Spinner from '../utils/Spinner'
import { ArrowLeftOutlined } from '@ant-design/icons/lib/icons'
import BackNavigation from '../Components/BackNavigation'
function EmployeeDetail() {
  const [employee, setEmployee] = useState<IEmployee>(initialValue)

  const { loading, setLoading } = useLoaderHook(true)

  const id = useParams().id!
  const navigate = useNavigate()

  useEffect(() => {
    EmployeeService.getEmployeeById(parseInt(id))
      .then((resp) => {
        setEmployee(resp.data)
      })
      .catch((err: Error) => {
        throw new Error(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  const Data: JSX.Element = !loading ? (
    <Home>
      <div>
        <BackNavigation />
      </div>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>
          {employee.name}
        </h1>
        <Descriptions
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '20px',
          }}
          layout="vertical"
          size="default"
        >
          <Descriptions.Item
            labelStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            label="Employee Name"
          >
            {employee.name}
          </Descriptions.Item>
          <Descriptions.Item
            labelStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            label="Phone"
            style={{ fontSize: '1.5rem' }}
          >
            {employee.phone}
          </Descriptions.Item>
          <Descriptions.Item
            labelStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            label="Email"
          >
            {employee.email}
          </Descriptions.Item>
          <Descriptions.Item
            labelStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            label="Department"
          >
            {employee.dept}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Home>
  ) : (
    <Spinner />
  )

  return Data
}

export default EmployeeDetail
