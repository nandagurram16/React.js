import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const history = useNavigate();
  return (
    <div>
      <center>Welcome to home page
        <br/>
      <button onClick={()=> history("/dashboard")}>Login</button>
      </center>
    </div>
  )
}

export default Home
