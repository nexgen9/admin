import React from 'react'
import"./Navbar.css"
import logo from "../../assets/logoo.png"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-content">
        <h1>VIORA</h1>
        <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar