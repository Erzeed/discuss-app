import React from 'react';
import '../style/leaderboard.css';
import ActiveUser from './cardActivUser';

function leaderboard() {
  return (
    <div className="leaderboard__container">
      <h2>Pengguna Aktif</h2>
      <div className="pengguna__aktif">
        <ActiveUser />
      </div>
    </div>
  );
}

export default leaderboard;
