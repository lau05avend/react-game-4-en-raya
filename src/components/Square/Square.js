import React from 'react';
import './Square.css';

function Square({ winner, turn, onClick, value }) {

  const handleClick = () => {
    (turn !== null && value === null) && onClick();
  }

  return (
    <div className="square" onClick={() => handleClick()}>
        {value}
    </div>
  )
}

export default Square;