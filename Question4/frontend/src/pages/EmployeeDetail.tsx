import React from 'react'
import { useParams, useMatch, useNavigate, Link } from 'react-router-dom'
import Home from './Home'

function EmployeeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <Home>
      <button onClick={() => navigate(-1)}>Go Back</button>
      EmployeeDetail
    </Home>
  )
}

export default EmployeeDetail
