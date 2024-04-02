import React from 'react'
import { Link } from 'react-router-dom'
import './NavLayout.css'

const NavLayout = () => {
  return (
    <nav className='NavContainer'>
        <ul>
            <li><Link to='/'>Home</Link></li>
        </ul>
        <ul>
            <li><Link to='/products'>Products</Link></li>
        </ul>
        <ul>
            <li><Link to='/AboutUs'>About Us</Link></li>
        </ul>
    </nav>
  )
}

export default NavLayout