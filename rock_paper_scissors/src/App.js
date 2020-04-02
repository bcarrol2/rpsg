import React, { useState } from 'react';
import './App.css';

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  return (
    <div className="main">
      <p>So far you have {wins} WINS, {losses} LOSSES, and {draws} DRAWS</p>
      <p>You picked {playerChoice} </p>
      <button onClick={() => setPlayerChoice('Rock')}>Rock</button>
      <button onClick={() => setPlayerChoice('Paper')}>Paper</button>
      <button onClick={() => setPlayerChoice('Scissors')}>Scissors</button>
    </div>
  );
}

export default App;
