/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login');
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>Discuss</h1>
      </div>
      <div className="navbar__login">
        <button onClick={onClickLogin} type="button">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
