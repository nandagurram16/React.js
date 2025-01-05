import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Firebase = () => {
   
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const {username,email,password,confirmpassword} = data

    const changehandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const submithandler =(event) =>{
        event.preventDefault()

        axios.put(('https://react-5ec23-default-rtdb.firebaseio.com/resgiter.json'),data)
        .then(
            (() => alert('submitted successfully'))
        )

        if(password == confirmpassword){
            console.log(data)
        }
        else{
            alert('Both passwords should be matched')
        }
    }

  return (
    <div>
      <form onSubmit={submithandler}>
      <input type='text' name='username' value={username} placeholder='username'onChange={changehandler}/><br/>
      <br/>
      <input type='email' name='email' value={email} placeholder='email'onChange={changehandler}/><br/>
      <br/>
      <input type='password' name='password' value={password} placeholder='Password'onChange={changehandler}/><br/>
      <br/>
      <input type='password' name='confirmpassword' value={confirmpassword} placeholder='Confirm Password'onChange={changehandler}/><br/>
      <br/>
      <input type='Submit' name='Submit'/>
      </form>
    </div>
  )
}

export default Firebase
