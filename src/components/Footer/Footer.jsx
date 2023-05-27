import React from 'react'
import "./Footer.css"
import { FaGithub , FaLinkedin,} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-main-container' id='footer'>
      <div className='footer-main-container-1'>

        <div className='title'>
        <p className='link-title call num'>Call</p>
        <p className='link-item num'>+91 799 239 0924</p>
 
        </div>
        <div className='item'>
        <p className='link-title email'>Email</p>
        <p className='link-item email'>theshaquib@gmail.com</p>
        </div>

      </div>

      <hr />

      <div className='footer-main-container-2'>
        <div className='paragraph'>
          <p>
          Innovation one project at a time
          </p>
        </div>
        <div className='social-icons-container'>
        <a href='https://github.com/theshaquib' target='_blank' className='Fa-icons'>
          <FaGithub/>
        </a>
        <a href='https://www.linkedin.com/in/shaquibsiddique/' target='_blank' className='Fa-icons'>
          <FaLinkedin/>
        </a>
      </div>

      </div>

    </div>
  )
}

export default Footer