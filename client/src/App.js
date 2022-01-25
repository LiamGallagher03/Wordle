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
  const [newLetter, setNewLetter] = useState()
  const [newGuess, setNewGuess] = useState('')

  return (<div className="App">
    <header>
      <h1>Wordle</h1>
    </header>
    <Board letters={letters} setLetters={setLetters} newLetter={newLetter} newguess={newGuess} />
    <Keyboard letters={letters} setNewLetter={setNewLetter}  setNewGuess={setNewguess} guess={newGuess}/>
  </div>
  );
}

export default App;


