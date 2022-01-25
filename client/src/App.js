import React, {useState} from 'react';
import './App.css'
import Keyboard from './Keyboard';
import Board from './Board';


function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "lightgrey"
    }))
  const [letters, setLetters] = useState(alphaArr)
<<<<<<< Updated upstream
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Board letters={letters}/>
      <Keyboard letters={letters}/>
    </div>
=======
  const [newLetter, setNewLetter] = useState()

  return (<div className="App">
    <header>
      <h1>Wordle</h1>
    </header>
    <Board letters={letters} setLetters={setLetters} newLetter={newLetter} />
    <Keyboard letters={letters} setNewLetter={setNewLetter} />
  </div>
>>>>>>> Stashed changes
  );
}

export default App;


