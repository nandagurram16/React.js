import React from 'react'

import CompB from './Components/CompB.jsx'

export const usercontext = React.createContext()
const App = () => {
  return (
    <div>
      <center>
        <usercontext.Provider value={'sending data to compb'}>
          <CompB/>
        </usercontext.Provider>
        
      </center>
    </div>
  )
}

export default App
