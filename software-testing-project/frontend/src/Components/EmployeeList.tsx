import { useEffect, useState } from 'react'
import { Button, Card, message } from 'antd'
import MyList from '../Components/List'
import EmployeeService from '../utils/EnployeeService'
import IEmployee, { initialValueArray } from '../Interfaces/Employee'
import EmployeeItem from './EmployeeItem'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons/lib/icons'
import Alert from '../utils/Alert'

// Adding comments for checking the CI actions

// Employee List is the Component renders all the start. It fetches all the Employee Data and displays it
// as a List
const EmployeeList = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [employee, setEmployee] =
    useState<Array<IEmployee>>(initialValueArray)

  // UseEffect is Called at the start when Component is  mounted
  useEffect(() => {
    EmployeeService.getAll()
      .then((res) => {
        setEmployee(res.data)
      })
      .catch((e: Error) => {
        console.log(e)
        Alert({
          type: 'error',
          content: e.message,
          messageApi: messageApi,
        })
        throw new Error(e.message)
      })
  }, [])

  // Delete the employee by id Called in the EmployeeItem Component and passed as prop
  const deleteEmployee = (id: number) => {
    try {
      EmployeeService.deleteEmployee(id)
        .then((res) => {
          let filtered = employee.filter((emp) => emp.id !== id)
          Alert({
            type: 'success',
            content: res.data,
            messageApi: messageApi,
          })
          setEmployee(filtered)
        })
        .catch((err) => {
          Alert({
            type: 'error',
            content: err.data,
            messageApi: messageApi,
          })
        })
    } catch (e: any) {
      Alert({ type: 'error', content: e, messageApi: messageApi })
    }
  }

  return (
    <Home>
      {contextHolder}
      <div className="flex m-10-20-0-0 just-end">
        <Link to={'/create'} data-testid="createForm-page">
          <Button icon={<UserAddOutlined />}>Create New</Button>
        </Link>
      </div>
      {/* Using the Custom made List. Defination is in the util/MyList.tsx */}
      {employee.length ? (
        <MyList
          items={employee}
          keyExtractor={(item) => item.id!}
          containerProps={{ style: { margin: '10px' } }}
          render={(item) => (
            <EmployeeItem employee={item} deleteEmployee={deleteEmployee} />
          )}
        />
      ) : (
        <div className="flex text-c align-center just-center">
          <Card className="fontWeight w-50 text-md ">
            No Empployee Data is Present. Add Employees from create New
          </Card>
        </div>
      )}
    </Home>
  )
}

export default EmployeeList
