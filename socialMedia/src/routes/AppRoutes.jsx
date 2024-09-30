import React from 'react'
import BowserRouter, { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const AppRoutes = () => {
  return (
    <BowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BowserRouter>
  )
}

export default AppRoutes