import React from 'react';
import '../style/cardActiveUser.css';

function ActiveUser() {
  return (
    <div className="activeuser__container">
      <div className="card__user">
        <p>1</p>
        <div className="user__img">
          <img src="https://ui-avatars.com/api/?background=random&name=reza&rounded=true" alt="" />
        </div>
        <div className="user__name">
          <p>Feizal Reza</p>
        </div>
        <div className="user__skor">
          <p>100</p>
        </div>
      </div>
    </div>
  );
}
export default ActiveUser;
