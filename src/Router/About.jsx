import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const About = () => {

let navigate = useNavigate()

const handleclick =()=>{
  navigate('/dashboard')
}
  return (
    <div>
        <center>
        <h1>Welcome to About</h1>
        <button onClick={handleclick}>Login</button>
      </center>
    </div>
  )
}

export default About
