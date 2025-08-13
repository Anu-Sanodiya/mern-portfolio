import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Anu SanodiyaResume .pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import { motion } from "framer-motion";


const Home = () => {
  // const [theme, setTheme] = useTheme();

  // const handleTheme = () => {
  //   setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  // };
  return (
    <>
     <div className="container-fluid home-container" id="home">
{/*       
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div> */}

      {/* Home Content */}
      <div className="container home-content">
        {/* Heading + Typewriter with fade from right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        {/* Buttons with fade from bottom */}
        <motion.div
          className="home-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=1234567890"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="btn btn-cv" href={Resume} download="your_name.pdf">
            My Resume
          </a>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Home;
