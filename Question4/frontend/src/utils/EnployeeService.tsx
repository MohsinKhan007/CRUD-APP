import API from './API'
import IEmployee from '../Interfaces/Employee'

// Services created to perform functions from backend End Points using the API Class
const getAll = () => {
  return API.get<Array<IEmployee>>('/getAll')
}

const createEmployee = (data: IEmployee) => {
  return API.post<IEmployee>(`/create`, data)
}

const getEmployeeById = (id: Number) => {
  return API.get<IEmployee>(`/getById/${id}`)
}

const updateEmployee = (data: IEmployee) => {
  return API.put<IEmployee>(`/update`, data)
}

const deleteEmployee = (id: Number) => {
  return API.delete<any>(`/delete/${id}`)
}

const EmployeeService = {
  getAll,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createEmployee,
}
export default EmployeeService
