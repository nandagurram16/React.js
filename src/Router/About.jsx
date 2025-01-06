import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const About = () => {
  // Get the name parameter from the URL
  const { name } = useParams();
  
  // useNavigate hook for navigation
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard'); // Navigate to dashboard
  };

  return (
    <div>
      <center>
        <h1>Welcome to About: {name}</h1> {/* Display name */}
        <button onClick={handleClick}>Login</button>
      </center>
    </div>
  );
};

export default About;
