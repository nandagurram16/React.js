import React, { useEffect, useState } from 'react'

const Errorbodar = () => {
  const [count,setcount] = useState(0)

  useEffect(() =>{
    if (count===10){
      throw new Error('component was crashed')
    }
  },[count])
  return (
    <>
    <center>
      <h1>Count: {count}</h1>
      <button onClick={() =>setcount(count+1)}>increment</button>
    </center>
    </>
  )
}

export default Errorbodar
