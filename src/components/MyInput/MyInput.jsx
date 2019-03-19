import React from 'react';
import './MyInput.css';
const MyInput = ({ id, type, placeholder }) => (
  <input id={id} className="input" type={type} placeholder={placeholder} />
);

export default MyInput;
