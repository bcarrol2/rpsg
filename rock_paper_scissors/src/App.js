import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';


function App() {
  
  const letsPlay = (event) => {
    setDisable(true)
    setTimeout(() => { setDisable(false) }, 1000);
    let playerPick = event.target.value
    setPlayerChoice(playerPick)
    setComputerChoice(randomPick)
    setGames(games + 1)

    if (playerPick === randomPick) {
      setDraws(draws + 1)
    } else if (playerPick === 'Rock' && randomPick === 'Paper') {
      setLosses(losses + 1)
    } else if (playerPick === 'Rock' && randomPick === 'Scissors') {
      setWins(wins + 1)
    } else if (playerPick === 'Paper' && randomPick === 'Rock') {
      setWins(wins + 1)
    } else if (playerPick === 'Paper' && randomPick === 'Scissors') {
      setLosses(losses + 1)
    } else if (playerPick === 'Scissors' && randomPick === 'Rock') {
      setLosses(losses + 1)
    } else if (playerPick === 'Scissors' && randomPick === 'Paper') {
      setWins(wins + 1)
    } else {
      alert('Wait, what now?');
    }
    
  }

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [games, setGames] = useState(0);
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  let randomPick = _.sample(computerOptions);

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const [disable, setDisable] = useState(false);

  return (
    <div className="main">
      <p>So far you have {wins} WINS, {losses} LOSSES, and {draws} DRAWS out of {games} games</p>
      <p>You picked {playerChoice} and the computer picked {computerChoice} </p>
      <button disabled={disable} value="Rock" onClick={letsPlay}>Rock</button>
      <button disabled={disable} value="Paper" onClick={letsPlay}>Paper</button>
      <button disabled={disable} value="Scissors" onClick={letsPlay}>Scissors</button>
    </div>
  );
}

export default App;