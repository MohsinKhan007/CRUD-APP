import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
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

const routes = {
  homeRoute: '/',
  invalid: '/invalidRoute',
}

const initials = (routeVal: string) => (
  <MemoryRouter initialEntries={[`${routeVal}`]}>
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </MemoryRouter>
)

describe('Routing The Application', () => {
  describe('Rendering the Home Page', () => {
    render(initials(routes.homeRoute))
    let createButton = screen.getByTestId('createForm-page')

    it('should be on The Home Page', async () => {
      expect(createButton).toBeInTheDocument()
    })
  })

  describe('Rendering invalid Page', () => {
    render(initials(routes.invalid))
    let pageNotFoundText = screen.getByTestId('PageNotFound')
    it('should render 404 page', () => {
      // expect(pageNotFoundText).toBeInTheDocument()
      expect(pageNotFoundText).toHaveTextContent('404 Page Not Found')
    })
  })
})
