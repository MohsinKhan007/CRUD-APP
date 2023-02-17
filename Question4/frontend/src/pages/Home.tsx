import React from 'react'
import { Layout } from 'antd'
import EmployeeList from '../Components/EmployeeList'
const { Header } = Layout

type HomeProps = {
  children?: React.ReactNode
}

const Home = (props: HomeProps) => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: 'teal',
          fontSize: '2.0rem',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Employee CRUD Application
      </Header>
      {props.children}
    </Layout>
  )
}

export default Home
