/* eslint-disable react/prop-types */
import React from 'react';
import '../style/cardActiveUser.css';

function ActiveUser({ score, user, rank }) {
  return (
    <div className="activeuser__container">
      <div className="card__user">
        <p>{rank}</p>
        <div className="user__img">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="user__name">
          <p>{user.name}</p>
        </div>
        <div className="user__skor">
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
}
export default ActiveUser;
