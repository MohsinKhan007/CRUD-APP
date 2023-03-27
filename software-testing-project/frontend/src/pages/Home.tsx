import React from 'react'
import { Layout } from 'antd'
import { FooterCopyRight, footerTitle, headerTitle } from '../consts'

import { Footer } from 'antd/es/layout/layout'

const { Header } = Layout

type HomeProps = {
  children?: React.ReactNode

}

const Home = (props: HomeProps) => {
  return (
    <Layout className="bg-grey bd-box scroll view-w-100 view-h-100 ">
      <Header
        className="fontWeight bg-teal text-c text-l"
        data-testid="Home"
      >
        {headerTitle}
      </Header>
      {props.children}

      <Footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgb(0,128,128)',
          color: 'black',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '24px',
        }}
        data-testid="AppFooter"
      >
        {footerTitle} <p style={{display:'flex',fontSize:'13px',textAlign:'center'}}>{FooterCopyRight} </p>
      </Footer>
    </Layout>
  )
}

export default Home
