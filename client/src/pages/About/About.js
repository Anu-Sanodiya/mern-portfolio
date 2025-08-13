import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import profile from '../../assets/profile.webp'
const About = () => {
  return (
    <>
  

<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 20,
    duration: 0.8,
  }}
>
  <div className="about" id="about">
    <div className="row">
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
        <img
          src={profile}          alt="profile_pic"
        />
      </div>
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        </p>
      </div>
    </div>
  </div>
</motion.div>

    </>
  );
};

export default About;