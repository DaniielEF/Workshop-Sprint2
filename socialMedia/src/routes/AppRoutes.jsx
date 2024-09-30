import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Post from '../components/Post'
import Login from '../components/Login'
import Search from '../components/Search'
import Profile from '../components/Profile'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={Login}/>
            <Route path="home" element={<Home />} />
            {/* <Route path="/*" element={<Layout />} >
            </Route> */}
        </Routes>
    </BrowserRouter>
  )
}

// const Layout = () => (
//     <>
//       <BottomNavigationBar />
//       <Routes>
//         <Route path="home" element={<Home />} />
//         <Route path="post" element={<Post />} />
//         <Route path="search" element={<Search />} />
//         <Route path="profile" element={<Profile />} />
//       </Routes>
//     </>
//   );

export default AppRoutes