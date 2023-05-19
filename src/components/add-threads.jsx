import React from 'react';
import '../style/addThreads.css';

function AddThreads() {
  return (
    <div className="threads__container">
      <div className="header__threads">
        <div className="header__avatar">
          <img src="https://ui-avatars.com/api/?background=random&name=reza&rounded=true" alt="" />
        </div>
        <div className="header__title">
          <h2>Home</h2>
        </div>
      </div>
      <div className="input__threads">
        <textarea name="input_thrads" id="input_thrads" cols="20" rows="10" placeholder="What's Happening" />
      </div>
      <div className="button__threads">
        <button type="button">Post</button>
      </div>
    </div>
  );
}

export default AddThreads;
