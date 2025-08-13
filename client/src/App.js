import React from 'react'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Techstack/TechStack'
import WorkExp from './pages/WorkExperiance/WorkExp'
import Projects from './pages/Projects/Project'
import Education from './pages/Education/Education'

const App = () => {
  return (
    <div>
      
      <Layout/>
      <div className="container">
     
        <About/>
           <Education/>
        <Techstack/>
        <WorkExp/>
        <Projects/>
       
      
      </div>
    </div>
  )
}

export default App
