import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';


function App() {
  
  const letsPlay = (event) => {
    setPlayerChoice(event.target.value)
    setComputerChoice(randomPick)
  }

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [games, setGames] = useState(0);
  const computerOptions = ['Rock', 'Paper', 'Scissors']
  let randomPick = _.sample(computerOptions)

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  return (
    <div className="main">
      <p>So far you have {wins} WINS, {losses} LOSSES, and {draws} DRAWS out of {games}</p>
      <p>You picked {playerChoice} and the computer picked {computerChoice} </p>
      <button name="Rock" value="Rock" onClick={letsPlay}>Rock</button>
      <button name="Paper" value="Paper" onClick={letsPlay}>Paper</button>
      <button name="Scissors" value="Scissors" onClick={letsPlay}>Scissors</button>
    </div>
  );
}

export default App;
