import React from 'react'
import shirtLogo from './m5.jpg'

const Image = () => {
  return (
    <div>
      <img src={shirtLogo} height="200" width="200" alt="Shirt Logo" />
      <br/>
      <br/>
      <a href={shirtLogo} className='btn btn-primary' download > click here to download</a>
    </div>
  )
}

export default Image
