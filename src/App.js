import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [effect,seteffect] = useState(0)
  const [memo,setmemo] = useState(0)

  useEffect(() =>{console.log('from useeffect'+effect)},[effect])
  useMemo(() =>{console.log('from memo'+memo)},[memo])
  return (
    <>
    <center>
      <button onClick={() => seteffect(effect+1)}>useeffect increment</button>
      <br/>
      <button onClick={() => setmemo(memo+1)}>usememo increment</button>
    </center>
    </>
  )
}

export default App
