import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Home from './Home'
import { Button, Descriptions } from 'antd'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
import useLoaderHook from '../utils/UseLoaderHook'
import { initialValue } from '../Interfaces/Employee'
import Spinner from '../utils/Spinner'

import BackNavigation from '../Components/BackButton'
import { mockEmployeeArray } from '../mocks/mockEmployee'

type EmployeeDetailTestProps = {
  isTestingRendered?: boolean
}

function EmployeeDetail({ isTestingRendered }: EmployeeDetailTestProps) {
  const [employee, setEmployee] = useState<IEmployee>(initialValue)

  const { loading, setLoading } = useLoaderHook(true)

  const lableStyling = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#008080',
  }
  const id = useParams().id!

  console.log('EmployeeDetailsPage')

  const fetchEmployeeDetails = async () => {
    if (!isTestingRendered) {
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
    } else {
      const employeeDetail = mockEmployeeArray.find((emp) => {
        if (emp.id === parseInt(id)) {
          return emp
        }
      })
      console.log(employeeDetail)
      if (employeeDetail) {
        setEmployee(employeeDetail)
        setLoading(false)
        console.log('Changed')
      }
    }
  }

  useEffect(() => {
    fetchEmployeeDetails()

    console.log('useEffect ', employee)
  }, [id])

  if (loading) {
    return (
      <div data-testid="EmployeeDetailSpinner">
        <Spinner />
      </div>
    )
  }

  const Data: JSX.Element = (
    <Home>
      <div>
        <BackNavigation />
      </div>
      <div className="p-20">
        <h1
          style={lableStyling}
          data-testid="employeeName"
          className="text-c text-h1"
        >
          {employee.name}
        </h1>
        <Descriptions
          className="bg-white p-20 bd-20"
          layout="vertical"
          size="default"
        >
          <Descriptions.Item
            labelStyle={lableStyling}
            label="Employee Name"
          >
            {employee.name}
          </Descriptions.Item>
          <Descriptions.Item
            labelStyle={lableStyling}
            label="Phone"
            className="text-title"
          >
            {employee.phone}
          </Descriptions.Item>
          <Descriptions.Item labelStyle={lableStyling} label="Email">
            <p
              data-testid="employeeEmail"
              style={{
                display: 'block',
                margin: '0px',
                padding: '0px',
                border: '0px',
              }}
            >
              {employee.email}
            </p>
          </Descriptions.Item>
          <Descriptions.Item labelStyle={lableStyling} label="Department">
            {employee.dept}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Home>
  )

  return Data
}

export default EmployeeDetail
