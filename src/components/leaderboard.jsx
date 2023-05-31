/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../style/leaderboard.css';
import ActiveUser from './cardActivUser';
import Kategori from './kategoriPopuler';

function leaderboard({ leaderData, category }) {
  return (
    <div className="leaderboard__container">
      <h2>Pengguna Aktif</h2>
      <div className="pengguna__aktif">
        {
          leaderData.map((data) => (
            <ActiveUser key={data.user.id} {...data} />
          ))
        }
      </div>
      <h2>Kategori Populer</h2>
      <div className="katgori__populer">
        {
          category.map((data) => (
            <Kategori key={data.id} {...data} />
          ))
        }
      </div>
    </div>
  );
}

export default leaderboard;
