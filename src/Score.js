import { useState } from 'react';
import './App.css';

function Score() {
  const [score, setScore] = useState(0);
  const [addNum, setAddNum] = useState();

  const handleClick = (num) => {
    if (Number.isFinite(parseInt(num))) {
      let sc = parseInt(num);
      sc = parseInt(parseInt(score) + parseInt(num));
      setScore(sc);
      setAddNum('');
    }
  };

  return (
    <div>
      <h2>{score}</h2>
      <div>
        <input
          id='score'
          type='text'
          className='input'
          value={addNum}
          onChange={(e) => setAddNum(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type='submit'
          className='btn'
          value='+'
          onClick={() => handleClick(addNum)}
        />
      </div>
    </div>
  );
}

export default Score;
