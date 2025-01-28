import React, { useRef } from 'react'

function Uncontrolled() {
    const inputref = useRef('')
    const submithandler = (event) =>{
        event.preventDefault()
        alert(inputref.current.value)
    }
    return (
        <>
        <form onSubmit={submithandler}>
            <input type='text' ref={inputref}/>
            <br></br>
            <input type='submit' value='submit'/>
        </form>
        </>
    )
}

export default Uncontrolled
