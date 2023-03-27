import { render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Main from '../Routes'
import EmployeeList from '../Components/EmployeeList'
import EmployeeForm from '../pages/EmployeeForm'
import { debug } from 'util'
import PageNotFound from '../pages/PageNotFound'
import { mockEmployeeArray } from '../mocks/mockEmployee'
import { footerTitle } from '../consts'

const routes = {
  homeRoute: '/',
  invalid: '/invalidRoute',
  createRoutePage: '/create',
}

const initials = (routeVal: string) => (
  <MemoryRouter initialEntries={[`${routeVal}`]}>
    <Routes>
      <Route
        path="/"
        element={<EmployeeList initialTestValue={mockEmployeeArray} />}
      />
      <Route path="/create" element={<EmployeeForm />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </MemoryRouter>
)
// Adding a test case for a footer div which is not implemented yet
test('checking the Footer Main Component should exists in the Document', () => {
  const { getByTestId } = render(initials(routes.homeRoute))
  const AppFooter = getByTestId('AppFooter')
  expect(AppFooter).toBeInTheDocument()
})
// Testing the Text content of the Footer Div
// import a Const and using it in the test case
test('testing the text content of the Footer Div', () => {
  const { getByTestId } = render(initials(routes.homeRoute))
  const AppFooter = getByTestId('AppFooter')
  expect(AppFooter).toHaveTextContent(footerTitle)
})
// Testing the Styling of the Component
// So By default the Div has 245,245 rgb, We are going to change that
test('testing the UI of the Footer Div', () => {
  const { getByTestId } = render(initials(routes.homeRoute))
  const AppFooter = getByTestId('AppFooter')
  const styles = window.getComputedStyle(AppFooter)
  expect(styles.backgroundColor).toBe('rgb(0, 128, 128)')
})
test('footer input should be the same',()=>{

  const {getByTestId}=render(initials(routes.homeRoute));
  const AppFooter=getByTestId('AppFooter')
  expect(AppFooter).toHaveTextContent('Software Testing Project software testing project all right reserved');

})