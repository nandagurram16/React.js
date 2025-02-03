import React, { useState } from 'react'

function App() {

  const [count,setcont] = useState(0)

  function inner(){
    setcont (count+1)
  }
  return (
    <>
    <h1>count: {count}</h1>
    <button onClick={inner}>iam conter</button>
    </>
  )
}

export default App
