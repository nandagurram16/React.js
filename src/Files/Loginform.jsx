import React, { useState } from 'react'

const Loginform = () => {

  const [user,setuser]=useState({
    username:"",
    password:""
  })

  const {username,password}= user;
  const changehandler =(event) =>{
    setuser({...user,[event.target.name]:[event.target.value]})
  }

  const submithandler =(event)=>{
    event.preventDefault()
    console.log(user)
  }
  return (
    <div>
      <center>
       <form onSubmit={submithandler}>
        <input type='text' name='username' value={username}
        onChange={changehandler}/><br/>
        <input type='text' name='password' value={password}
        onChange={changehandler}/><br/>
        <input type='submit' name='submit'/><br/>
       </form>
      </center>
    </div>
  )
}

export default  Loginform
