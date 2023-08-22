import React from 'react'
import './Slides.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import {linkedin, github, instagram } from "../../assets";

const Slides = () => {
  return (
    <header>
      <div className="wrapper">
          <h1 className="title">Arnold Huete<br/>Data Engineer</h1>
          <h1 className="subtitle">From Perú to the World!</h1>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/arnoldhuete/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" className='linkedin-icon'></img>
            </a>
            <a href="https://github.com/ArnoldHueteG" target="_blank" rel="noreferrer">
              <img src={github} alt="github" className='github-icon'></img>
            </a>
            <a href="https://www.instagram.com/arnoldhuete/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram" className='instagram-icon'></img>
            </a>
          </div>
      </div>
    </header>
  )
}

export default Slides