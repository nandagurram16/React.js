import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

const Home = () => {

  const [auth,setAuth] = useState(false)

  if(auth){
    return <Navigate to='/Dashboard'/>
  }
  return (
    <div>
      <center>
        <h1>Welcome to Home</h1>
        <button onClick={()=> setAuth(true) }>Login</button>
      </center>
    </div>
  )
}

export default Home
