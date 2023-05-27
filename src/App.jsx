import React from 'react'
import "./App.css"

import { Footer, About, Experience, Home, Navbar,  } from './components/app'

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Projects/> */}
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App