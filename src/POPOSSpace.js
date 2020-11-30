// src/Project.js

import React from "react";
// import logo from './logo.svg'
import "./POPOSSpace.css";
import { Link } from "react-router-dom";



function POPOSSpace(props) {
  // Get the
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}
  <h1>
    <Link to={`/details/${id}`}>
        {name}
    </Link>
  </h1>
export default POPOSSpace;
