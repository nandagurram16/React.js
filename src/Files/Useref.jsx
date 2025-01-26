import React, { useEffect, useRef } from 'react'

const Useref = () => {

    const data = useRef(null)
    const submitandler = event =>{
        event.preventDefault()
        console.log(data.current.value)
    }

    useEffect(()=>{
        data.current.focus()
    })
  return (
    <>
    <form onSubmit={submitandler}>
        <input type='text' placeholder='Enter Your Name' ref={data}/>
        <br/>
        <input type='submit'/>
    </form>
    </>
  )
}

export default Useref
