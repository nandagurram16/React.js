import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            response => setData(response.data)
        )
    },[])
  return (
    <div>
      {data.map(
        item => <li key={item.id}>{item.name}</li>
      )}
    </div>
  )
}

export default Axios
