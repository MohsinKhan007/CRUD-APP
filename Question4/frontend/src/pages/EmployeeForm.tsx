import { useState, useEffect, SyntheticEvent } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
import EmployeeService from '../utils/EnployeeService'
import Home from './Home'
import IEmployee, { initialValue } from '../Interfaces/Employee'

const EmployeeForm = () => {
  const paramId = +useParams().id!
  const navigate = useNavigate()
  const isAdd = !paramId

  const [employee, setEmployee] = useState<IEmployee>(initialValue)

  const getTitle = () => {
    const title = isAdd ? 'Create Employee' : 'Update Employee'
    return <h1>{title}</h1>
  }
  const getButtonText = () => {
    const buttonText = isAdd ? 'Create' : 'Update'
    return buttonText
  }

  useEffect(() => {
    getEmployeeData(paramId)
  }, [paramId])

  const getEmployeeData = async (paramId: number) => {
    const data = await EmployeeService.getEmployeeById(paramId).then(
      (res) => res.data
    )
    setEmployee(data)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (isAdd) {
      console.log('create call kro')
      // create function
    } else {
      // Update function
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    setEmployee((prevState) => {
      return {
        ...prevState,
        [key]: value,
      }
    })
  }

  const Data = (
    <>
      <input
        type="text"
        defaultValue={employee.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={employee.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={employee.username}
        name="username"
        onChange={handleChange}
      />

      <input
        type="text"
        value={employee.phone}
        name="phone"
        onChange={handleChange}
      />
      <input type="submit" value={getButtonText()} />
    </>
  )

  return (
    <Home>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        {getTitle()}
        <form onSubmit={handleSubmit}>{Data}</form>
      </div>
    </Home>
  )
}

export default EmployeeForm
