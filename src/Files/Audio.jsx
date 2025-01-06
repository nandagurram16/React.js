import React from 'react'

import Orange from './music.mp3'

const Audio = () => {
  return (
    <div>
        <audio controls>
            <source src={Orange} type='audio/mp3' />
        </audio>
    </div>
  )
}

export default Audio
