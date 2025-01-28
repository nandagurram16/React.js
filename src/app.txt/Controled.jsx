import React, { useState } from 'react'
import Test from './Test'

const Controled = () => {
    const [name, setname] = useState('')
    const changehandler =(event)=>{
        setname(event.target.value)
    }
  return (
    <div>
        Name:{name}<br/>
      <input type='text' onChange={changehandler}/>
      <Test changehandler={changehandler}/>
    </div>
  )
}

export default Controled
