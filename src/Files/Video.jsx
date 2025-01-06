import React from 'react'

import aswth from './video.mp4'
const Video = () => {
  return (
    <div>
      <video width='320' height='250' controls >
        <source src={aswth} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Video
