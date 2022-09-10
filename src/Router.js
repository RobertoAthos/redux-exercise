import React from 'react'
import UserLogin from "./Pages/UserLoginForm";
import UserRegister from "./Pages/UserRegisterForm";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import AdminHome from './Pages/AdminHome'
import UserHome from './Pages/UserHome'
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
   <Routes>
        <Route  path='/' element={<UserLogin/>}/>
        <Route  path='/adminLogin' element={<AdminLogin/>}/>
        <Route  path='/admin' element={<AdminHome/>}/>
        <Route  path='/user' element={<UserHome/>}/>
        <Route  path='/userRegister' element={<UserRegister/>}/>
        <Route  path='/adminRegister' element={<AdminRegister/>}/>
   </Routes>
  )
}

export default Router