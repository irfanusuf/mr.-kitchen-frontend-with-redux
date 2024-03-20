import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navlist">

            <ul>
                <li><Link to={"/"}> Home </Link></li>
                <li><Link to={"/contact"}> Contact </Link></li>
                <li><Link to={"/login"}> Login </Link></li>
                <li><Link to={"/register"}> Register </Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar