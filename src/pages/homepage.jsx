import React from 'react';
import '../style/homepage.css';
import AddThreads from '../components/add-threads';
import AllThreads from '../components/allThreads';
import Leaderboard from '../components/leaderboard';

function Homepage() {
  return (
    <div className="homepage__container">
      <div className="threads__homepage">
        <AddThreads />
        <AllThreads />
      </div>
      <div className="leaderboard__homepage">
        <Leaderboard />
      </div>
    </div>
  );
}

export default Homepage;
