import React,{useContext, useState} from 'react'
import { store } from '../App'

const Display = () => {

    const [data,setdata] = useContext(store)
    const [name,setname] = useState('')
    const submithandler = (event) =>{
        event.preventDefault()
        setdata([...data,{model:name}])
    }
  return (
    <div className='card'>
      <div className='card-body'>
        {data.map(item => <h3 className='card-title'>{item.model}</h3>)}
        <form className='form' onSubmit={submithandler}>
            <input type='text' onChange={(event) => setname(event.target.value)} placeholder='enter your model'/>
            <input type='submit' value='Add'/>
        </form>
      </div>
    </div>
  )
}

export default Display
