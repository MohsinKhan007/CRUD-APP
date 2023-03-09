// Api Testing, Router Testing
import React, { Component } from 'react'
import { render, screen } from '@testing-library/react'

import BackButton from '../Components/BackButton'

import EmployeeDetail from '../pages/EmployeeDetail'
import { BrowserRouter } from 'react-router-dom'
import IEmployee from '../Interfaces/Employee'

export type EmployeeDetailProp = {
  isTest?: number
  testEmployee?: IEmployee
}

const EmployeeData: EmployeeDetailProp = {
  testEmployee: {
    id: 1,
    dept: 'Finance',
    name: 'Muhammad Mohsin',
    phone: '0729229664',
    email: 'mohsinwaseem65@gmail.com',
  },
  isTest: 1,
}

describe('back button component', () => {
  render(
    <BrowserRouter>
      <BackButton />
    </BrowserRouter>
  )
  it('should render/In the Document', () => {
    const backButtonRender = screen.getByTestId('backButton')
    expect(backButtonRender).toBeInTheDocument()
  })
})

describe('Employee Detail Button', () => {
  render(
    <BrowserRouter>
      <EmployeeDetail />
    </BrowserRouter>
  )
  it('Should contain the rendered value', () => {})
})
