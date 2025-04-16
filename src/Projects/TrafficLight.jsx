import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    let timeout;

    const changeLight = () => {
      setCurrentLight((prevLight) => {
        if (prevLight === 'red') return 'green';
        if (prevLight === 'green') return 'yellow';
        return 'red';
      });
    };

    const redTime = 5000;     // 2 minutes
    const yellowTime = 2000;   // 10 seconds
    const greenTime = 5000;   // 3 minutes

    const time = currentLight === 'red' ? redTime
               : currentLight === 'yellow' ? yellowTime
               : greenTime;

    timeout = setTimeout(changeLight, time);

    return () => clearTimeout(timeout);
  }, [currentLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
