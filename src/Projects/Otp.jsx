import React, { useState } from 'react';
import './Otp.css';


// functonlaties
// 1.forwward functionality
       //1.when no digit in th input.apply the new key in it and focus theimmideate next input
      // 2. when input contains a digit.
          //  a. if cursor is at rhe begining.then apply the new value and slide  its older value toward right
          // b. if cursor is at the end apply the new value to the next input and may be focus on next to next input
// 2.Backward functionality
// 3Arrow functionality 

const Otp = ({ size = 6 }) => {
  const [inputvalues, setInputValues] = useState(() => new Array(size).fill(''));

  
// taking callback function in side th usestate with new array and taking the size of whatever we r given size
    // then fill with empty strings
    // it creates the six length array

  const focusNext = (currentInput) => {
    currentInput?.nextElementSibling?.focus();
  };

  const focusPrevious = (currentInput) => {
    currentInput?.previousElementSibling?.focus(); // ❌ typo: was "previoussibling"
  };

  const handleNumericInput = (event) => {
    const inputValue = event.key;

    if (!/^[0-9]$/.test(inputValue)) return;

    const inputIndex = Number(event.target.id);

    if (inputvalues[inputIndex].length === 0) {
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[inputIndex] = inputValue;
        return newValues;
      });
      focusNext(event.target);
    }
  };

  const handleBackspace = (event) => {
    if (event.key === 'Backspace') { // ❌ typo: was 'backsoace'
      const inputIndex = Number(event.target.id);
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[inputIndex] = '';
        return newValues;
      });
      focusPrevious(event.target);
    }
  };

  const handleArrows = (event) => {
    if (event.key === 'ArrowRight'){
      focusNext(event.target)
    }
    else if(event.key === 'ArrowLeft'){
      focusPrevious(event.target);
    }
  }

  const handleKeyUp = (event) => {
    handleNumericInput(event);
    handleBackspace(event);
    handleArrows(event)
  };

  return (
    <div className="container">
      <div className="otp_inputs">
        {inputvalues.map((inputValue, index) => (
          // rendering every element  of inputvalues
          // here inputvalues are in inputvalue so the value should br inputvalue
          // here converting each inputvalue of index into string
          // if u given 3 inside the empty fill the whole inputvalues will fill with 3
          <input
            key={index}
            id={index.toString()}
            value={inputValue}
            onKeyUp={handleKeyUp}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
