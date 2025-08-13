import React from 'react'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Techstack/TechStack'
import WorkExp from './pages/WorkExperiance/WorkExp'
import Projects from './pages/Projects/Project'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import MobileNav from './components/MobileNav/MobileNav'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 Techinfoyt &copy; 2023</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  )
}

export default App
