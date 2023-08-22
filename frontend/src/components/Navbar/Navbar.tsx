import React from 'react'
import './Navbar.css'
import { ahuetegLogo } from "../../assets";

const Navbar = () => {
  return (
    <nav >
    <a href="#" title="Arnold Huete" rel="home">
      <img src={ahuetegLogo} alt="Arnold Huete"></img>
    </a>
    <ul>
      <li><a href="#aboutme">About Me</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contactme">Contact Me</a></li>
    </ul>
    </nav>
  )
}

        export default Navbar