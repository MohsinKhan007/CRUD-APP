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
function EmployeeDetail() {
  const [employee, setEmployee] = useState<IEmployee>(initialValue)

  const { loading, setLoading } = useLoaderHook(true)

  const id = useParams().id!
  const navigate = useNavigate()
  // console.log(id)

  useEffect(() => {
    EmployeeService.getEmployeeById(parseInt(id))
      .then((resp) => {
        console.log('helo')
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
        <Button
          size="large"
          type="ghost"
          style={{ borderRadius: '20px' }}
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        ></Button>
      </div>
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>
          {employee.name}
        </h1>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          style={{ padding: '20px' }}
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
          <Descriptions.Item label="department">
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
