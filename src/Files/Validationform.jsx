import React, {useState} from 'react'

const Validationform = () => {
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
            if(username.length <= 7){
                alert('user name must be atleat 7 characters')
            }
            else if(password !== confirmpassword){
                alert(' confirmpassword and password must be matched  ')
            }
            else{
                console.log(data)
            }
        }
  return (
    <div>
        <h1>Validation Form</h1>
    <form onSubmit={Submithandler}>
     <input type='text' name='username' value={username}
     onChange={changehandler} placeholder='username'/> <br/>  
     <input type='email' name='email' value={email}
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

export default Validationform
