import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
const App = () => {
  return (
    <>
    <Route path='/' component={Header} />
    <Router path='/' component={Footer} />
    </>
  )
}

export default App
