// Api Testing, Router Testing
import React, { Component } from 'react'
import { cleanup, render, screen } from '@testing-library/react'

import BackButton from '../Components/BackButton'

import EmployeeDetail from '../pages/EmployeeDetail'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

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

afterAll(cleanup)
