// src/Project.js

import React from 'react'
// import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div>
      <h1>{name}</h1>
      <img 
        src={`${process.env.PUBLIC_URL}images/${image}`} 
        width="300" 
        height="300" 
        alt="Hello" 
      />
     
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
