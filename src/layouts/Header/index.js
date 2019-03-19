import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import MyBrand from '../../components/MyBrand/MyBrand';

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <MyBrand brand="TESTAPP" />
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
