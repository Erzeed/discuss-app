import React from 'react';
import '../style/login.css';

function login() {
  return (
    <div className="container_login">
      <div className="login">
        <p>Login Now</p>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Email"
            // onChange={(data) => onHandleChange(data)}
          />
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            // onChange={(data) => onHandleChange(data)}
          />
          <br />
        </form>
        <button type="button">Login</button>
        <div className="loginAccount">
          {/* <p onClick={onRegister}>
            {locale === 'id' ? 'Daftar Sekarang' : 'Register Now'}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default login;
