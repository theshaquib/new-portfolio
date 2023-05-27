import React from 'react';
import "./Home.css";
import { FaGithub , FaLinkedin,} from "react-icons/fa";
import Css3 from "../../assets/css3.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Html5 from "../../assets/html5.svg";
import ReactJs from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import Profile from "../../assets/profile.jpg"



const Home = () => {
  return (
    <div className='main-home-container' id='home'>
      <div className='main-home-container-1'>
      <div className='home-heading-container'>
        <h1>Front-End Developer</h1>
        <p>Hi, I am Shaquib Siddique. A passionate Front-end Developer.</p>

        
      </div >

      <div className='social-icons-container'>
        <a href='https://github.com/theshaquib' target='_blank' className='Fa-icons'>
          <FaGithub/>
        </a>
        <a href='https://www.linkedin.com/in/shaquibsiddique/' target='_blank' className='Fa-icons'>
          <FaLinkedin/>
        </a>
      </div>

      <div className='home-stack-container'>

        <p> Tech Stack  </p>

        <div className='icons-container'> 
        <img src={Html5} alt="" className='icons'/>
        </div>

        <div className='icons-container'> 
        <img src={Css3} alt="" className='icons'/>  
        </div>

        <div className='icons-container'> 
        <img src={javascript} alt="" className='icons'/>       
        </div>

        <div className='icons-container'> 
        <img src={ReactJs} alt="" className='icons'/>  
        </div>

        <div className='icons-container'> 
        <img src={Bootstrap} alt="" className='icons'/>  
        </div>

      </div>

      <div className='resume-button-container'>
        <a href="/shaquib-siddique-resume.pdf" download>DOWNLOAD RESUME</a>
      </div>
      </div>
  

    <div className='profile-container'>
      <img src={Profile} alt="" />
    </div>

    </div>
  )
}

export default Home