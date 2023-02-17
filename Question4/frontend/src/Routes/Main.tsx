import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from '../pages/EmployeeForm'
import EmployeeDetail from '../pages/EmployeeDetail'

import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import EmployeeList from '../Components/EmployeeList'

// const Home= lazy(()=>import('../pages/Home'));
// const PageNotFound=lazy(()=>import('../pages/PageNotFound'));

interface MainProps {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/create" element={<EmployeeForm />} />
      <Route path="/edit/:id" element={<EmployeeForm />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Main
