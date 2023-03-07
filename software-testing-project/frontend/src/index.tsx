import React from 'react'
import ReactDOM from 'react-dom/client'
// Adding A global css file as small tweeks are required and mostly the design is made in
// Ant design .v3
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // Using React Router Dom Browser Router to add routing in the application as a base component
  // Passing the routing file as react.Children
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
