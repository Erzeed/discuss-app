/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../style/login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useDataInput from '../hooks/loginUser';
import { asyncRegisterUser } from '../states/user/action';

function register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataUser, setInputData] = useDataInput();

  const onHandleChange = (data) => {
    setInputData(data);
  };

  const onRegister = () => {
    const { name, email, password } = dataUser;
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  const onSudahPunyaAkun = () => {
    navigate('/');
  };

  return (
    <div className="container_register">
      <div className="register">
        <p>Register Now</p>
        <form>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(data) => onHandleChange(data)}
          />
          <br />
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
        <button onClick={onRegister} type="button">Register</button>
        <div className="loginAccount">
          <p onClick={onSudahPunyaAkun}>
            Sudah punya akun
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
