import { useEffect, useState } from 'react'
import { Button, message } from 'antd'
import MyList from '../Components/List'
import EmployeeService from '../utils/EnployeeService'
import IEmployee from '../Interfaces/Employee'
import EmployeeItem from './EmployeeItem'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons/lib/icons'
import Alert from '../utils/Alert'

const EmployeeList = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [employee, setEmployee] = useState<Array<IEmployee>>([])
  useEffect(() => {
    EmployeeService.getAll()
      .then((res) => {
        setEmployee(res.data)
      })
      .catch((e: Error) => {
        throw new Error(e.message)
      })
  }, [])

  const deleteEmployee = (id: number) => {
    try {
      let filtered = employee.filter((emp) => emp.id !== id)
      console.log(filtered, ' filtered')
      // Delete Api Call
      Alert({
        type: 'success',
        content: 'Employee is deleted sucessfully',
        messageApi: messageApi,
      })
      setEmployee(filtered)
    } catch (e: any) {
      Alert({ type: 'error', content: e, messageApi: messageApi })
    }
  }

  return (
    <Home>
      {contextHolder}
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: '10px 20px 0px 0px',
        }}
      >
        <Link to={'/create'}>
          <Button icon={<UserAddOutlined />}>Create New</Button>
        </Link>
      </div>
      {employee ? (
        <MyList
          items={employee}
          keyExtractor={(item) => item.id}
          containerProps={{ style: { margin: '10px' } }}
          render={(item) => (
            <EmployeeItem employee={item} deleteEmployee={deleteEmployee} />
          )}
        />
      ) : (
        <>loading</>
      )}
    </Home>
  )
}

export default EmployeeList
