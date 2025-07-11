import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'

const App = () => {
  const[showLogin, setShowLogin] = useState(false) //constante para setar aonde vai ser mostrado a aba de login/navbar e showlogin para a tela de login
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>

    </>
  )
}

export default App