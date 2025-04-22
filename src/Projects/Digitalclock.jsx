
import React, { useEffect, useState } from "react";

import './Digitalclock.css'

const DigitalClock = ( ) =>{

    const [dateTime,setdate] = useState(new Date())

    useEffect(() =>{
        const time = setInterval(() => {
            setdate(new Date)
        }, 1000);

        return () => clearInterval(time)
    },[])

    const formattime = (date) =>{
        return date.toLocaleTimeString()
    }

    const formatdate = (date) =>{
        return date.toLocaleDateString('en-US',{
            weekday:'long',
            year:'numeric',
            day:'numeric',
            month: 'long'
        })
    }
    return(
        <div className="container">
            <h1 className="time">{formattime(dateTime)}</h1>
            <p className='date'>{formatdate(dateTime)}</p>
        </div>
    )
}


export default DigitalClock


