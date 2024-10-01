//eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import BottomNavigationBar from '../containers/BottomNavigationBar'
import Post from '../components/Post'
import Search from '../components/Search'
import Profile from '../components/Profile'
import Notifications from '../components/Notifications'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<Layout />} >
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

const Layout = () => (
    <>
      <BottomNavigationBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );

export default AppRoutes