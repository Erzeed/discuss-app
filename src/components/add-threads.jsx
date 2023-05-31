/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../style/addThreads.css';

function AddThreads({ addThread }) {
  const [inputData, setInput] = useState({
    title: '',
    body: '',
    category: '',
  });

  function setInputData(data) {
    setInput({
      ...inputData,
      [data.target.id]: data.target.value,
    });
  }

  function onHandleSubmit() {
    addThread(inputData);
  }
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
        <div className="threads__titleandcategory">
          <input type="text" id="title" placeholder="Title" onChange={(data) => setInputData(data)} />
          <input type="text" id="category" placeholder="Category" onChange={(data) => setInputData(data)} />
        </div>
        <textarea name="input_thrads" id="body" cols="20" rows="10" placeholder="What's Happening" onChange={(data) => setInputData(data)} />
      </div>
      <div className="button__threads">
        <button onClick={onHandleSubmit} type="button">Post</button>
      </div>
    </div>
  );
}

export default AddThreads;
