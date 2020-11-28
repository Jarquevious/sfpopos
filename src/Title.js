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
        
        <div>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/about">About</NavLink>
        
        </div>

        </header>
      </div>
    )
  }
export default Title