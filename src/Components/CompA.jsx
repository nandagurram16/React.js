import React, { useState } from 'react'
import { store } from '../App.js'

const CompA = () => {

  const [data, setdata] = useState(store)
  return (
    <div>
      Comp A{data}
    </div>
  )
}

export default CompA
