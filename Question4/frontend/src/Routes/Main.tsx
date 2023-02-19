import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from '../utils/Spinner'

const EmployeeForm = lazy(() => import('../pages/EmployeeForm'))
const EmployeeList = lazy(() => import('../Components/EmployeeList'))

const EmployeeDetail = lazy(() => import('../pages/EmployeeDetail'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const Main: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Main
