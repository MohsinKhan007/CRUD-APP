import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

type HomeProps = {
  children?: React.ReactNode
}

const Home = (props: HomeProps) => {
  return (
    <Layout
      style={{
        backgroundColor: '#F5F5F5',
        height: '100vh',
        width: '100vw',
        overflow: 'scroll',
        boxSizing: 'border-box',
      }}
    >
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
