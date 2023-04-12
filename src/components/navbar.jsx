/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>Discuss</h1>
      </div>
      <div className="navbar__login">
        <button type="button">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
