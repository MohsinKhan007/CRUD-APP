import React from 'react'
import BackButton from '../Components/BackNavigation'
import Home from './Home'

function PageNotFound() {
  return (
    <Home>
      <BackButton />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        {' '}
        <h1 style={{ fontSize: '4.0rem', color: 'teal' }}>404</h1>
        <h2 style={{ fontSize: '2.0rem', color: 'teal' }}>
          Page Not Found
        </h2>
      </div>
    </Home>
  )
}

export default PageNotFound
