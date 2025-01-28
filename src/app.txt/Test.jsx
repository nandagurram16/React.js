import React from 'react'

const Test = (props) => {
  return (
    <div>
      <input type='text' onChange={props.changehandler}/>
    </div>
  )
}

export default Test
