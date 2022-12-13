import './App.css';
import React, { useState } from 'react';
import Players from './Players';

function Input() {
  const [name, setName] = useState();
  const [message, setMessage] = useState('');
  const [players, setPlayers] = useState([]);
  const handleClick = (name) => {
    if (typeof name === 'undefined' || name === '')
      setMessage('No face no name no number');
    else {
      setPlayers([...players, name]);
      setMessage('');
      setName('');
    }
    console.log(players);
  };

  return (
    <div>
      <div className='box'>
        <div>
          <h3>Rummy score</h3>
          <input
            type='text'
            className='input'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='btn' onClick={() => handleClick(name)}>
            +
          </button>
        </div>
        {message}
      </div>
      {players.map((el) => (
        <div className='box'>
          <Players name={el} />
        </div>
      ))}
    </div>
  );
}

export default Input;
