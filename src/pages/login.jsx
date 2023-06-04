/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import '../style/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import useDataInput from '../hooks/loginUser';

function login() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataUser, setInputData] = useDataInput();

  const onHandleChange = (data) => {
    setInputData(data);
  };

  useEffect(() => {
    if (authUser) {
      navigate('/home');
    }
  }, [authUser]);

  const onLogin = () => {
    const { email, password } = dataUser;
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/home');
  };

  const onRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container_login">
      <div className="login">
        <p>Login Now</p>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(data) => onHandleChange(data)}
          />
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(data) => onHandleChange(data)}
          />
          <br />
        </form>
        <button onClick={onLogin} type="button">Login</button>
        <div className="loginAccount">
          <p onClick={onRegister}>
            Register Sekarang
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
