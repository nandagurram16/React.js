import React, { useState } from 'react'
import './Weater.css'
const Wheater = () => {

    const[city,setcity]=useState('')

    // saving result of celsious
    const [result,setresult] = useState('')

    const changehandler=e=>{
        setcity(e.target.value)
    }

    const submithandler = e =>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then(Response => Response.json()
        .then(data =>{
            const kelvin = data.main.temp
            const celsious = kelvin-273.15
            setresult(`Temperature in ${city} is ${Math.round(celsious)}°C`);
            setcity('')
        })
        )
    }
  return (
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>Weater App</h4>
            <form onSubmit={submithandler}>
                <input type='text' name='city' value={city} onChange={changehandler}/><br/>
                <input type='submit' value='Get Temperature'/>
            </form>
            {result && <p className='weather-result'>{result}</p>}
        </div>
    </div>
  )
}

export default Wheater
