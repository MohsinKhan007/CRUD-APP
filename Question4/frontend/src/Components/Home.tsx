import React from 'react'
import { Layout } from 'antd'
import EmployeeList from './EmployeeList'
const { Header } = Layout
const Home = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: 'teal',
          fontSize: '2.0rem',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        className=""
      >
        Employee CRUD Application
      </Header>
      <EmployeeList />
    </Layout>
  )
}

export default Home
