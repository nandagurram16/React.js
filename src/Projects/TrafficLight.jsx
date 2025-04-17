import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {

    const [light,setlight] = useState('red')

    useEffect(() =>{
        let timeout;

        if (light === 'red'){
            timeout = setTimeout(() =>{
                setlight('green')
            },2000)
        }
        else if (light === 'green'){
            timeout = setTimeout(() => {
                setlight('yellow')
            }, 2000);
        }
        else if (light === 'yellow'){
            timeout = setTimeout(() => {
                setlight('red')
            }, 1000);
        }

        return () => clearTimeout(timeout)
    },[light])
  return(
    <div className='traffic_light'>
        <div className={`light red ${light === 'red' ? 'active': ''}`}></div>
        <div className={`light yellow ${light === 'yellow' ? 'active':''}`}></div>
        <div className={`light green ${light === 'green' ? 'active' : ''}`}ass></div>
    </div>
  )
  
};

export default TrafficLight;
