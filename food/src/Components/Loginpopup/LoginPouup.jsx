import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const LoginPouup = ({setShowLogin}) => {
    const[currenState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currenState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popoup-input">
            {currenState==="Login"?<></>:<input type="text" placeholder='Enter your name' required/>}
            
            <input type="email" placeholder='Enter your Email' required />
            <input type="password" placeholder='Please enter your password' required />
        </div>
        <button>{currenState==="sign up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>i agree to the terms of use & privacy policy.....</p>

        </div>
        {currenState==='Login' ?<p>Create a new account? <span onClick={()=>setCurrentState("sign up")}>Click here</span></p>:
         <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
       
      </form>
    </div>
  )
}

export default LoginPouup
