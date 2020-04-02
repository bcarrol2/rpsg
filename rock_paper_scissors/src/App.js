import React, { useState } from 'react';
import './App.css';

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  return (
    <div className="main">
      <p>So far you've won {wins} times!</p>
      <button onClick={() => setWins(wins + 1)}>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
    </div>
  );
}

export default App;
