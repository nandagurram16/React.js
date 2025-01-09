import React from 'react'
import { connect } from 'react-redux'
import{increase,decrease} from './Action.jsx'

const inc = ({count,increase,decrease}) => {

  return (
    <div>
      Count from Inc component : {count}<br/> <br/>
      <button onClick={() => increase()}>Increment</button>
      <button onClick={() => decrease()}>Decrease</button>
    </div>
  )
}

export default inc
