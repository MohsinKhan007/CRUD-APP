import API from './API'
import IEmployee from '../Interfaces/Employee'

const getAll = () => {
  return API.get<Array<IEmployee>>('/users')
}

const getEmployeeById = (id: Number) => {
  return API.get<Array<IEmployee>>(`/users/${id}`)
}

const updateEmployee = (id: Number, data: IEmployee) => {
  return API.put<any>(`/usersUpdate/${id}`, data)
}

const deleteEmployee = (id: Number) => {
  return API.delete<any>(`/users/${id}`)
}

const EmployeeService = {
  getAll,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
}
export default EmployeeService
