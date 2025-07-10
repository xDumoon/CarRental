import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  const[showLogin, setShowLogin] = useState(false) //constante para setar aonde vai ser mostrado a aba de login/navbar e showlogin para a tela de login
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

    </>
  )
}

export default App