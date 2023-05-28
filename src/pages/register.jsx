import React from 'react';
import '../style/login.css';
import { useDispatch } from 'react-redux';
import useDataInput from '../hooks/loginUser';
import { asyncRegisterUser } from '../states/user/action';

function register() {
  const dispatch = useDispatch();
  const [dataUser, setInputData] = useDataInput();

  const onHandleChange = (data) => {
    setInputData(data);
  };

  const onRegister = () => {
    const { name, email, password } = dataUser;
    dispatch(asyncRegisterUser({ name, email, password }));
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
          {/* <p onClick={onRegister}>
            {locale === 'id' ? 'Daftar Sekarang' : 'Register Now'}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default register;
