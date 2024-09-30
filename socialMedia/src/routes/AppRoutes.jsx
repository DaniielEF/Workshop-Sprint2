//eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes