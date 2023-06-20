import React, {useState} from 'react'
import logo from "../images/logo.webp"
import {Link} from 'react-router-dom'
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const checkUserLogin = () => {
    (isloggedIn)? setIsLoggedIn(false) : setIsLoggedIn(true)
  }
  return (
    <div className='shadow-md py-4 flex justify-between px-52 items-center'>
      <div>
        <a href="/"><img className="w-12" alt="logo" src={logo}/></a>
      </div>
      <div>
        <ul className='flex gap-8'> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>       
          <li 
          className='cursor-pointer'  
          onClick={()=>{
            checkUserLogin();
          }}>{(isloggedIn)? "Logout" : "Login"}</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
