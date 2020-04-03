import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import './App.css';

function App() {

  const letsPlay = (event) => {
    setDisable(true)
    setTimeout(() => { setDisable(false) }, 2000);
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
    } else if (playerPick === 'Gun') {
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

  const cheatPress = useKeyPress('g');

  return (
    <div className="overlay">
      <p>So far you have <span style={{color: 'green'}}>{wins}</span> WINS, <span style={{color: 'red'}}>{losses}</span> LOSSES, and <span style={{color: 'black'}}>{draws}</span> DRAWS out of <span>{games}</span> games</p>
      <p>You picked {playerChoice} and the computer picked {computerChoice} </p>
      <button disabled={disable} value="Rock" onClick={letsPlay}>Rock</button>
      <button disabled={disable} value="Paper" onClick={letsPlay}>Paper</button>
      <button disabled={disable} value="Scissors" onClick={letsPlay}>Scissors</button>
      {cheatPress && <button id="gun-button" disabled={disable} value="Gun" onClick={letsPlay}>Gun</button>}
    </div>
  );
}

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

export default App;