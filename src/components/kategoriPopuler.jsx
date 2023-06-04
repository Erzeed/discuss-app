/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../style/kategori.css';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../states/threads/action';
import asyncPopulateUsersAndThreads from '../states/shared/action';

function Kategori({ category }) {
  const [activeElement, setActiveElement] = useState(null);
  const dispatch = useDispatch();

  const onHandleCategory = (clickedCategory) => {
    setActiveElement(clickedCategory);
    if (clickedCategory === activeElement) {
      setActiveElement(null);
      dispatch(asyncPopulateUsersAndThreads());
    }
    dispatch(filterByCategory(clickedCategory));
  };

  return (
    <div className="kategori__container">
      <div className="card__kategori">
        <button
          id={category}
          className={activeElement === category ? 'active' : ''}
          onClick={() => onHandleCategory(category)}
          type="button"
        >
          {category}
        </button>
      </div>
    </div>
  );
}

export default Kategori;
