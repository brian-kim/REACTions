import React from 'react';

const Button = ({ times }) => {
  return (
    <button name='clicked' onClick={times}>click me</button>
  )
}

export default Button;