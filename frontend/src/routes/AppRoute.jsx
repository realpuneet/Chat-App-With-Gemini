import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute