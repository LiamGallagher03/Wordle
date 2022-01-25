import Key from './Key'
import React from 'react';

const Keyboard = ({letters, setNewLetter}) => {

  return (<div>
    {letters.map(l => 
      <Key letter={l.letter} 
      color={l.color}
      newLetter={l.setNewLetter}/>
      )}
  </div>);
};

export default Keyboard;
