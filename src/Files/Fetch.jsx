import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const[data,setData] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
     response => response.json()
    ).then(json => setData(json))
  },[])
  return (
    <div>
      {data.map(
        item => <li key={item.id}>{item.name}</li>
        )}
    </div>
  )
}

export default Fetch
