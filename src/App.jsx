import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}
