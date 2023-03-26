import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from '../Components/EmployeeList'
import IEmployee from '../Interfaces/Employee'
import { createBrowserHistory } from 'history'
import PageNotFound from '../pages/PageNotFound'
import EmployeeDetail from '../pages/EmployeeDetail'

import { act } from 'react-dom/test-utils'
import { jest, test } from '@jest/globals'
import userEvent from '@testing-library/user-event'
jest.setTimeout(15000)

afterEach(() => {
  cleanup()
})

const MockData: IEmployee[] = [
  {
    id: 1,
    dept: 'initial',
    phone: '0729229664',
    name: 'testing employee',
    email: 'dummy@dummy.com',
  },
]

const history = createBrowserHistory()
history.push('/')

const newComponent = (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<EmployeeList initialTestValue={MockData} />}
      />
      <Route
        path="/employee/:id"
        element={<EmployeeDetail isTestingRendered={true} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)

test('testing EmployeeItem Component through EmployeeList and Checking possible data present', async () => {
  render(newComponent)

  await waitFor(() => {
    expect(screen.getByText('testing employee')).toBeInTheDocument()
  })
})

test('testing EmployeeDetails Component through EmployeeList and Checking possible data present', async () => {
  const user = userEvent.setup()

  render(newComponent)
  act(async () => {
    await user.click(screen.getByText('testing employee'))

    await waitFor(
      () => {
        expect(screen.getByTestId('employeeEmail')).toBeInTheDocument()
        expect(screen.getByTestId('employeeEmail')).toHaveTextContent(
          'dummy@dummy.com'
        )
      },
      { timeout: 12000 }
    )
  })
})
