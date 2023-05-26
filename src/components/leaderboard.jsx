import React from 'react';
import '../style/leaderboard.css';
import ActiveUser from './cardActivUser';
import Kategori from './kategoriPopuler';

function leaderboard() {
  return (
    <div className="leaderboard__container">
      <h2>Pengguna Aktif</h2>
      <div className="pengguna__aktif">
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
      </div>
      <h2>Kategori Populer</h2>
      <div className="katgori__populer">
        <Kategori />
        <Kategori />
        <Kategori />
        <Kategori />
        <Kategori />
        <Kategori />
      </div>
    </div>
  );
}

export default leaderboard;
