import React from 'react'
import logo from "../images/logo.webp"
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='shadow-md py-4 flex justify-between px-52 items-center'>
      <div>
        <Link to="/"><img className="w-12" alt="logo" src={logo}/></Link>
      </div>
      <div>
        <ul className='flex gap-8'> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>       
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
