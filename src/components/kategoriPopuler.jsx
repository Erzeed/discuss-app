/* eslint-disable react/prop-types */
import React from 'react';
import '../style/kategori.css';

function Kategori({ category }) {
  return (
    <div className="kategori__container">
      <div className="card__kategori">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default Kategori;
