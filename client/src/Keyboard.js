import Key from './Key'
import React from 'react';

const Keyboard = ({letters, setNewLetter, setNewGuess, guess}) => {

  return (<div>
    {letters.map(l => 
      <Key letter={l.letter} 
      color={l.color}
      newLetter={l.setNewLetter}
      setNewGuess={setNewGuess}
      guess={guess}/>
      )}
  </div>);
};

export default Keyboard;
