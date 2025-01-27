import React, { createContext, useState } from 'react'
import Display from './Components/Display.jsx';
import Count from './Components/Count.jsx';

export const store = createContext();

const App = () => {

  const [data,setdata] = useState([
    {
      model:'Nokia'
    },

    {
      model:'mi'
    },

    {
      model:'oppo'
    }
  ]);
  return (
    <div>
      <store.Provider value={[data,setdata]}>
        <center>
          <Count/>
          <Display/>
        </center>
      </store.Provider>
    </div>
  )
}

export default App

