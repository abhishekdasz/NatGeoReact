import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='nav-sec'>
            <div className="logo-container">
                <img src={logo} alt="logo" className='logo' />
            </div>
        <div className="nav-container">
            <div className="nav-menu">
                <li className='list'> HOME </li>
                <li className='list'> GALLERY </li>
                <li className='list'> MAGAZINES </li>
                <li className='list'> TV </li>
                <li className='list'> ABOUT US </li>
            </div>
        </div>
    </div>
  )
}

export default NavBar
