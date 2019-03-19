import React from 'react';
import './MyButton.css';

const MyButton = ({ id, text, className, onClick }) => (
  <button id={id} className={className} onClick={() => onClick()}>
    {text}
  </button>
);

export default MyButton;
