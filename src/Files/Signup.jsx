import React, { useState } from 'react'

const Signup = () => {
    const [data,setData]=useState({
        username:'',
        email:"",
        password:"",
        confirmpassword:""
    })

    const {username,email,password,confirmpassword} = data;

    const changehandler =(event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const Submithandler =(event)=>{
        event.preventDefault()
        if(confirmpassword===password){
            console.log(data)
        }
        else{
            console.log('password not Matched')
        }
    }
  return (
    <div>
    <h1>SignUp page</h1>
    <form onSubmit={Submithandler}>
     <input type='text' name='username' value={username}
     onChange={changehandler} placeholder='username'/> <br/>  
     <input type='text' name='email' value={email}
     onChange={changehandler} placeholder='email'/> <br/> 
     <input type='password' name='password' value={password}
     onChange={changehandler} placeholder='password'/> <br/>  
     <input type='password' name='confirmpassword' value={confirmpassword}
     onChange={changehandler} placeholder='confirm password'/> <br/> 
     <input type='Submit' name='Submit'/>   
    </form>
    </div>
  )
}

export default Signup
