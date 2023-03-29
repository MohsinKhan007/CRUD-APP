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
import { mockEmployeeArray } from '../mocks/mockEmployee'
//jest.setTimeout(15000)
// Comments by Syed Ali hasan for jest timing change
jest.setTimeout(16000)

afterEach(() => {
  cleanup()
})
// Test case 1: Testing EmployeeItem Component through EmployeeList
// Test case 2: Testing EmployeeDetails Component through EmployeeList

const history = createBrowserHistory()
history.push('/')

const baseComponent = (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<EmployeeList initialTestValue={mockEmployeeArray} />}
      />
      <Route
        path="/employee/:id"
        element={<EmployeeDetail isTestingRendered={true} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
//1. Rendering the EmployeeList Component. In the employee List component the setState is called and data is being listed as a list of employees. By giving mock Data to the list and saving the state through the data, employee item component is looped through the data and list of employees are displayed. We find out either through the given loop, the testing employee data is present in the Employee Item or Not
test('testing EmployeeItem Component through EmployeeList and Checking possible data present', async () => {
  render(baseComponent)

  await waitFor(() => {
    // need to check it by name as there are many employeeItem with data-testid
    expect(screen.getByText('testing employee')).toBeInTheDocument()
  })
})

//2. in this integration test or E2E test, A mock data list is rendered on the EmployeeList page where the list of Employees are shown. through the list, mock fire event is called which finds the employee name by text and mock an click
// event on the employee name and redirects to the EmployeeDetail page where the employee details are shown. Here the test case is written to check whether the employee details are present or not.
test('testing EmployeeDetails Component through EmployeeList and Checking possible data present', async () => {
  const user = userEvent.setup()

  render(baseComponent)
  act(async () => {
    // Finding and clicking the testing Employee div
    // by list of mock Employee user Clicks on the testing employee and Redirects it to the Details Page
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
