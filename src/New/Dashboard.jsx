import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
    const  {name} = useParams()
  return (
    <div>
      <center>
     <h4>
        Welcome to dashboard:{name}
     </h4>      
    </center>
    </div>
  )
}

export default Dashboard
