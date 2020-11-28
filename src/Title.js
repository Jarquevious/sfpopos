// src/Title.js
import './Title.css';
import { NavLink } from 'react-router-dom'
import React from 'react'

function Title() {
    return (
      <div className="Title">
        <header>
          <h1>SFPOPOS</h1>
          <div className="Title-Subtitle"><h3>San Francisco Privately Owned Public Open Spaces</h3></div>
        </header>
      </div>
    )
  }
export default Title