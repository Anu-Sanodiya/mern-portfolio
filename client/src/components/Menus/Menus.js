import React from 'react'
import './menus.css'
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcContacts } from "react-icons/fc";
import profile from '../../assets/profile.webp'
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <motion.div
            className="navbar-profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={profile}
              alt="profile pic"
            />
          </motion.div>

          <motion.div
            className="nav-items"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="nav-item">
              {[
                { to: "home", icon: <FcHome />, label: "Home" },
                { to: "about", icon: <FcAbout />, label: "About" },
                { to: "education", icon: <FcReadingEbook />, label: "Education" },
                { to: "techstack", icon: <FcBiotech />, label: "Tech Stack" },
                { to: "projects", icon: <FcVideoProjector />, label: "Projects" },
                { to: "work", icon: <FcPortraitMode />, label: "Work Experience" },
                { to: "contact", icon: <FcContacts/>, label: "Contact" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="nav-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    {item.icon} {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          className="nav-items"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="nav-item">
            {[
              { to: "home", icon: <FcHome /> },
              { to: "about", icon: <FcAbout /> },
              { to: "education", icon: <FcReadingEbook /> },
              { to: "techstack", icon: <FcBiotech /> },
              { to: "projects", icon: <FcVideoProjector /> },
              { to: "work", icon: <FcPortraitMode /> },
              { to: "contact", icon: <FcContacts /> },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="nav-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Menus;