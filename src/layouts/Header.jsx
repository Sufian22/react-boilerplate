import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
    </div>
  );
}
