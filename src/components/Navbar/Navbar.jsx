import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='wrapper'>
<div className='navbar-main-container'>
        <div className='navbar-logo-name'>
        <p><a href="">Shaquib.dev</a></p>
        </div>
        <div className='navbar-name'>
           <p> <a href="#home">Home</a> </p> 
           <p> <a href="#about">About</a> </p> 
           {/* <p> <a href="#projects">Projects</a> </p>  */}
           <p> <a href="#experience">Experience</a> </p> 
           <p> <a href="#footer">Contact</a> </p> 
        </div>
    </div>
    </div>
    
  )
}

export default Navbar