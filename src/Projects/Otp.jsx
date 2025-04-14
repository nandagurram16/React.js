import React, { useState, useRef } from 'react';
import './Otp.css';

const Otp = () => {
  const otp_count = 6;
  const [input, setInput] = useState(new Array(otp_count).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow numeric input

    const newInput = [...input];
    newInput[index] = value;
    setInput(newInput);

    // Move focus to next input
    if (value && index < otp_count - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !input[index] && index > 0) {
      const newInput = [...input];
      newInput[index - 1] = '';
      setInput(newInput);
      inputRefs.current[index - 1].focus();
    }
  };

  const getOtpValue = () => {
    return input.join('');
  };

  const handleSubmit = () => {
    alert('Entered OTP: ' + getOtpValue());
  };

  return (
    <div className='container'>
      <h1>Validate OTP</h1>
      <div className='otp-container'>
        {input.map((value, index) => (
          <input
            key={index}
            className='otp'
            type='text'
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Otp;
