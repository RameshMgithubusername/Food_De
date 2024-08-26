import React,{useState} from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp=({setShowLogin})=> {

  const [currState,setCurrSatate]=useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

          </div>
          <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="mail" placeholder='Your Mail' required />
            <input type="password" placeholder='Password' required />
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree  to the terms of use & privercy policy </p>
          </div>
          {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrSatate("Sign Up")}>Click here</span></p>:<p>Alredy have an account ? <span onClick={()=>setCurrSatate("Login")}>Login here</span></p>}
          
          
        </form>
    </div>
  )
}

export default LoginPopUp;
