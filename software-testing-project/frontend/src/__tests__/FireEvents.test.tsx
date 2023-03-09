import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import EmployeeList from '../Components/EmployeeList'
import IEmployee, { EmployeeListProps } from '../Interfaces/Employee'
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { mockData } from '../mocks/mockEmployee'
import EmployeeForm from '../pages/EmployeeForm'
import PageNotFound from '../pages/PageNotFound'

const routes = {
  homeRoute: '/',
  formRoute: '/create',
  invalid: '/invalidRoute',
}

const initials = (routeVal: string) => (
  <MemoryRouter initialEntries={[`${routeVal}`]}>
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/create" element={<EmployeeForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </MemoryRouter>
)

test('renders data returned by API', async () => {
  let utils = render(initials(routes.formRoute))
  let email = utils.getByTestId('email')
  let password = utils.getByTestId('password')

  // testing the field are present in the Component
  expect(email).toBeInTheDocument()
  expect(password).toBeInTheDocument()
  // testing the field are empty initially
  fireEvent.change(email, { target: { value: 'dummy@dummy.com' } })
  fireEvent.change(password, { target: { value: '123456' } })

  //  expect(screen.getByTestId('email').value).toBe("dummy@dummy.com");
  //  expect(screen.getByTestId('password')?.value).toBe("123456");
})
