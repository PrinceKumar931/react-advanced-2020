import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  const [text, setText] = useState('Random Title')
  const handleClick = () => {
    if (text === 'Random Title') {

      setText('Hello World');
    }
    else {
      setText('Random Title');
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </>
  );
};

export default UseStateBasics;
