import React from 'react'
import BowserRouter, { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Post from '../components/Post'

const AppRoutes = () => {
  return (
    <BowserRouter>
        <Routes>
            <Route path="/*" element={<Layout />} >
        </Route>
        </Routes>
    </BowserRouter>
  )
}

const Layout = () => (
    <>
      <BottomNavigationBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </>
  );

export default AppRoutes