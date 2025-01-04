import React, { useState } from 'react';

const Submit = () => {
  const [data, setData] = useState({ username: '', password: '' });

  const { username, password } = data;

  const onChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={onChange}
            name='username'
          />
          <br />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={onChange}
            name='password'
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </center>
    </div>
  );
};

export default Submit;
