import React, { useState } from 'react'

const Calculator = () => {
  const [input,setinput] = useState('')
  const changehandler = e =>{
    setinput(e.target.value)
  }

const styling = {
  background:'orange',
  color:'black',
  margin:'3px',
  padding:'12px',
  border:'2px solid black',borderRadius:'5px'
}
  const [Result,setresult] = useState(0)
  return (
    <div style={{marginTop:'10px'}}>
      <center>
        <input style={{border:'2px solid black',borderRadius:'5px'}} type='text' value={input} name='input'
        onChange={changehandler}/>
        <br/><br/>
        <button style={{border:'2px solid black',borderRadius:'5px'}} onClick={()=>setresult(eval(input))}>Result</button>
        <br/>
        <h4>Result is: {Result}</h4>
        <br/>
        <button style={styling} onClick={()=> setinput(input+'1')}>1</button>
        <button style={styling} onClick={()=> setinput(input+'2')}>2</button>
        <button style={styling} onClick={()=> setinput(input+'3')}>3</button>
        <button style={styling} onClick={()=> setinput(input+'4')}>4</button>
        <button style={styling} onClick={()=> setinput(input+'5')}>5</button><br/>

        <button style={styling} onClick={()=> setinput(input+'6')}>6</button>
        <button style={styling} onClick={()=> setinput(input+'7')}>7</button>
        <button style={styling} onClick={()=> setinput(input+'8')}>8</button>
        <button style={styling} onClick={()=> setinput(input+'9')}>9</button>
        <button style={styling} onClick={()=> setinput(input+'0')}>0</button><br/>

        <button style={styling} onClick={()=> setinput(input+'+')}>+</button>
        <button style={styling} onClick={()=> setinput(input+'-')}>-</button>
        <button style={styling} onClick={()=> setinput(input+'/')}>/</button>
        <button style={styling} onClick={()=> setinput(input+'*')}>*</button>
        <button style={styling} onClick={()=> setinput('')}>clr</button>
      </center>
    </div>
  )
}

export default Calculator
