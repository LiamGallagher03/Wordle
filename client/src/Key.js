import React from 'react';

const Key = ({letter, color, setNewLetter, guess}) => {
  const onKeyPress = () => {
    setNewLetter(letter)
    setNewGuess(newGuess+letter)
  }
  return <div 
  onClick={onKeyPress}
  style={{backgroundColor: color} }>
      {letter}
  </div>;
};

export default Key;