import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Card from './Pages/Card/Card'
import PlaceOrder from './Pages/PlacOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPouup from './Components/Loginpopup/LoginPouup'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPouup setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Card/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App