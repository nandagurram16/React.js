import React from 'react'
import {usercontext} from '../App.js'

const CMP_B = () => {
  return (
    <div>
      <usercontext.Consumer>
       {value => <div>{value}</div>}
      </usercontext.Consumer>
    </div>
  )
}

export default CMP_B
