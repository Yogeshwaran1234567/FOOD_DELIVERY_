import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("Home")
    const{getTotalCardAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo2} alt="" className="logo" /></Link>
      <ul className="navber-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Moblie-app</a>
        <a href='#footer'  onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
      </ul>
      <div className="navebar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCardAmount()===0?"":"dot"}></div>

        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
