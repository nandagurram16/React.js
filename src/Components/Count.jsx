import React,{useContext} from 'react'
import { store } from '../App'

const Count = () => {

    const [data,setdata] = useContext(store)
  return (
    <div className='card'>
      <div className='card-body'>
        <h3 className='card-body'> count: {data.length}</h3>
      </div>
    </div>
  )
}

export default Count
