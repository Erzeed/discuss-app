/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import '../style/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navbar() {
  const {
    authUser,
  } = useSelector((states) => states);
  const [checkUser, setCheckUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser !== null) {
      setCheckUser('Log Out');
    } else {
      setCheckUser('SignIn');
    }
  }, [dispatch, authUser]);

  const onClickLogin = () => {
    if (checkUser === 'Log Out') {
      dispatch(asyncUnsetAuthUser());
    }
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>Discuss App</h1>
      </div>
      <div className="navbar__login">
        <button
          onClick={onClickLogin}
          type="button"
          className={checkUser}
        >
          {checkUser}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
