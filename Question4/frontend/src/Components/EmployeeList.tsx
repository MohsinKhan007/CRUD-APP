import { useEffect, useState } from 'react'
import { Button } from 'antd'
import MyList from '../Components/List'
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

  const deleteEmployee = (id: string) => {
    // we will filter and call the api to delete on both sides
    console.log('Delete Employee Main ', id)
    // Add the API call and add the toast or message that employee is deleted
    let filtered = employee.filter((emp) => emp.id !== id)
    console.log(filtered, ' filtered')

    setEmployee(filtered)
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

      <MyList
        items={employee}
        keyExtractor={(item) => item.id}
        render={(item) => (
          <EmployeeItem employee={item} deleteEmployee={deleteEmployee} />
        )}
      />
    </Home>
  )
}

export default EmployeeList
