import './App.css';
import Keyboard from './Keyboard';
import Board from './Board';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Board />
      <Keyboard />
    </div>
  )
}

export default App;
