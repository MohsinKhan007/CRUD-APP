import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EmployeeService from '../utils/EnployeeService'
import Home from './Home'
import IEmployee, { initialValue } from '../Interfaces/Employee'
import { Button, Form, Input, message } from 'antd'
import useLoaderHook from '../utils/UseLoaderHook'
import BackButton from '../Components/BackNavigation'
import Alert from '../utils/Alert'
import { NoticeType } from 'antd/es/message/interface'

const EmployeeForm = () => {
  const paramId = +useParams().id!
  const isAdd = !paramId
  const [employee, setEmployee] = useState<IEmployee>(initialValue)
  const { loading, setLoading } = useLoaderHook(true)
  const [messageApi, contextHolder] = message.useMessage()
  const getTitle = () => {
    const title = isAdd ? 'Create Employee' : 'Update Employee'
    return <h1 style={{ fontSize: '2rem' }}>{title}</h1>
  }
  const getButtonText = () => {
    const buttonText = isAdd ? 'Create' : 'Update'
    return buttonText
  }

  useEffect(() => {
    !isAdd && getEmployeeData(paramId)
  }, [isAdd, paramId])

  const getEmployeeData = async (paramId: number) => {
    await EmployeeService.getEmployeeById(paramId)
      .then((res) => {
        setEmployee(res.data)
      })
      .catch((err: Error) => {
        throw new Error(err.message)
      })
      .finally(() => setLoading(false))
  }

  const handleSubmit = () => {
    try {
      if (isAdd) {
        console.log('Create Api Call')

        Alert({
          type: 'success',
          content: 'Employee is Created sucessfully',
          messageApi: messageApi,
        })
      } else {
        console.log('Update Api Call')

        Alert({
          type: 'success',
          content: 'Employee is Updated sucessfully',
          messageApi: messageApi,
        })
      }
    } catch (e: any) {
      Alert({ type: 'error', content: e, messageApi: messageApi })
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
      {contextHolder}
      <Form style={{ width: '50%' }} initialValues={employee}>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="username"
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
          ]}
        >
          <Input
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
      <Button htmlType="submit" onClick={handleSubmit} type="primary">
        {getButtonText()}
      </Button>
    </>
  )
  let displayData = isAdd ? Data : !loading && Data

  return (
    <Home>
      <div>
        <BackButton />
        <div style={{ padding: '0px 80px ' }}>
          <div style={{ textAlign: 'center' }}>{getTitle()}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {displayData}
          </div>
        </div>
      </div>
    </Home>
  )
}

export default EmployeeForm
