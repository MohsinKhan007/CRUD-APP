import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

type HomeProps = {
  children?: React.ReactNode
}

const Home = (props: HomeProps) => {
  return (
    <Layout className="bg-grey bd-box scroll view-w-100 view-h-100 ">
      <Header className="fontWeight bg-teal text-c text-l">
        Employee CRUD Application
      </Header>
      {props.children}
    </Layout>
  )
}

export default Home
