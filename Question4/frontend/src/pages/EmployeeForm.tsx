import React from 'react'

import { useParams, useMatch, useNavigate, Link } from 'react-router-dom'
import Home from './Home'

const EmployeeForm = (): JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isAdd = !id
  console.log(id, ' useParams')
  return (
    <Home>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        Employee Form
      </div>
    </Home>
  )
}

export default EmployeeForm
