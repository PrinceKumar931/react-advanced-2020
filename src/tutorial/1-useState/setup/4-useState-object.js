import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ]= useState({
    name: 'Prince',
    age: 21,
    message: 'world is fucked'
  });

  const [name, setName] = useState('Prince');
  const [age, setAge] = useState(21);
  const [message, setMessage] = useState('World is Fucked');


  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' });
    setMessage('hello world')
  }

  // return (
  //   <>
  //   <h3>{person.name}</h3>
  //   <h3>{person.age}</h3>
  //   <h3>{person.message}</h3>
  //   <button className='btn' onClick={changeMessage}>Change Message</button>

  //   </>
  // );
  return (
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>

    </>
  );
};

export default UseStateObject;
