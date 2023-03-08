import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../utils/EnployeeService'
import Home from './Home'
import IEmployee, { initialValue } from '../Interfaces/Employee'
import { Button, Form, Input, message } from 'antd'
import useLoaderHook from '../utils/UseLoaderHook'
import BackButton from '../Components/BackButton'
import Alert from '../utils/Alert'

const EmployeeForm = () => {
  const paramId = +useParams().id!
  const isAdd = !paramId
  const [employee, setEmployee] = useState<IEmployee>(initialValue)
  const { loading, setLoading } = useLoaderHook(true)
  const [formDisbale, setFormDisable] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  let navigate = useNavigate()
  const [form] = Form.useForm()

  // getTitle getting the title of the form Create or Update by checking the IsAdd variable
  const getTitle = () => {
    const title = isAdd ? 'Create Employee' : 'Update Employee'
    return <h1 className="text-l text-c">{title}</h1>
  }

  // getButtonText getting the button text of submit button Create or Update by checking the IsAdd variable
  const getButtonText = () => {
    const buttonText = isAdd ? 'Create' : 'Update'
    return buttonText
  }

  // useEffect to Call the Api when Component is created
  useEffect(() => {
    !isAdd && getEmployeeData(paramId)
  }, [isAdd, paramId])

  // Call the api and getting the Employee Data if it is an Edit Form
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
  // Calling when submitting the form
  const handleSubmit = () => {
    try {
      form
        .validateFields()
        .then(async (_) => {
          if (isAdd) {
            console.log('Create Employee')
            await EmployeeService.createEmployee(employee)
            Alert({
              type: 'success',
              content: 'Employee is Created sucessfully',
              messageApi: messageApi,
            })
          } else {
            await EmployeeService.updateEmployee(employee)

            Alert({
              type: 'success',
              content: 'Employee is Updated sucessfully',
              messageApi: messageApi,
            })
          }
          setFormDisable(true)
          setTimeout(() => {
            return navigate('/')
          }, 2000)
        })
        .catch((e) => {
          console.log(e)
          Alert({
            type: 'error',
            content: 'Resolve the input fields and try again',
            messageApi: messageApi,
          })
        })
    } catch (e: any) {
      console.log(e)
      Alert({ type: 'error', content: e, messageApi: messageApi })
    }
  }
  // Handles the changed value of the selected input field in the State Hook
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

  // JSX of Form to display in the Element
  const Data = (
    <>
      {contextHolder}
      <Form
        className="w-50 "
        initialValues={employee}
        form={form}
        disabled={formDisbale}
      >
        <Form.Item
          labelAlign="left"
          labelCol={{ span: 4 }}
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email cannot be Empty',
            },
            {
              message: 'Enter a valid Email Address',
              validator: async (_, value) => {
                const emailRegex =
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if (emailRegex.test(value) && value !== '') {
                  return Promise.resolve()
                } else {
                  return Promise.reject(
                    new Error('Email Address is not valid')
                  )
                }
              },
            },
          ]}
        >
          <Input
            maxLength={40}
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          labelCol={{ span: 4 }}
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input
            maxLength={20}
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          labelCol={{ span: 4 }}
          label="Department"
          name="dept"
          rules={[
            { required: true, message: 'Please input your department!' },
          ]}
        >
          <Input
            maxLength={20}
            name="dept"
            value={employee.dept}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          labelCol={{ span: 4 }}
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: 'Please input your phone!' },
            {
              message: 'Enter A Valid Phone Phone',
              validator: async (_, value) => {
                const phoneRegex =
                  /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/
                if (phoneRegex.test(value) && value !== '') {
                  return Promise.resolve()
                } else {
                  return Promise.reject(
                    new Error('Phone number is not valid')
                  )
                }
              },
            },
          ]}
        >
          <Input
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </Form.Item>
        <div className="text-c">
          <Button
            disabled={formDisbale}
            htmlType="submit"
            onClick={handleSubmit}
            type="primary"
            className="w-20 fontWeight"
          >
            {getButtonText()}
          </Button>
        </div>
      </Form>
    </>
  )
  // check if the Api is fecthing Data of not and display the Data if api fecthing is completed
  let displayData = isAdd ? Data : !loading && Data

  return (
    <Home>
      <div>
        <BackButton />
        <div className="p-0-80">
          <div data-testid="Form-Title" className="text-c">
            {getTitle()}
          </div>
          <div className="flex flex-d-col align-c ">{displayData}</div>
        </div>
      </div>
    </Home>
  )
}

export default EmployeeForm
