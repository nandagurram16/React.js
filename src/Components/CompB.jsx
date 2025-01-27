import React, { useState } from 'react'
import {store} from '../App.js'


const CompB = () => {

  const[data,setdata] = useState(store)
  return (
    <div>
        Comp B{data}
    </div>
  )
}

export default CompB
