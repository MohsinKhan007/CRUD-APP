// Api Testing, Router Testing
import React, { Component } from 'react'
import { render, screen } from '@testing-library/react'

import BackButton from '../Components/BackButton'

import EmployeeDetail from '../pages/EmployeeDetail'
import { BrowserRouter } from 'react-router-dom'

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
  it('Should contain the rendered value', () => {
    expect(screen.findByTestId('employeeName')).toBeInTheDocument()
  })
})
