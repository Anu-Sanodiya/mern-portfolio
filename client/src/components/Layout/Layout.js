import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import './layout.css'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menus from "../Menus/Menus";
const Layout = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggl = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={toggle? "sidebar-toggle":"sidebar"}>
                    <div className="sidebar-toggle-icons">
                  
                        <p onClick={handleToggl}>
                            {
                                toggle ?
                                 <AiOutlineDoubleLeft size={30} /> :
                                 <AiOutlineDoubleRight size={30} />
                            }
                        </p>
                    </div>
                  <Menus toggle={toggle}/>

                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
