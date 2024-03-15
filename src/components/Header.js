import React from 'react'
import heading1 from "../assets/heading1.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <img src={heading1} alt="logo" style={{ width: "12rem", height: "3rem" }} />
        <nav style={{margin:"1rem"}}>
          <ul>
            <li><Link className="ancho" to='/'>Home</Link></li>
            <li ><Link className="ancho" to='/about'>About</Link></li>
            <li><Link className="ancho" to='/menu'>Menu</Link></li>
            <li><Link className="ancho" to='/reserve'>Reservations</Link></li>
            <li><Link className="ancho" to='/orderonline'>Order Online</Link></li>
            <li><Link className="ancho" to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;