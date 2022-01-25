import React from 'react';

const Key = ({letter, color, setNewLetter}) => {
  const onKeyPress = () => {
    setNewLetter(letter)
  }
  return <div 
  onClick={onKeyPress}
  style={{backgroundColor: color} }>
      {letter}
  </div>;
};

export default Key;