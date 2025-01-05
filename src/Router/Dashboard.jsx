import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const [auth,setAuth]=useState(false)

  if(auth){
    return <Navigate to='/About' />
  }
  return (
    <div>
      <center>
        <h1>Welcome to Dashboard</h1>
        <button onClick={() => setAuth(true)}>Login</button>
      </center>
    </div>
  )
}

export default Dashboard
