import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../style/homepage.css';
import AddThreads from '../components/add-threads';
import AllThreads from '../components/allThreads';
import Leaderboard from '../components/leaderboard';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { asyncSeeLeaderboard } from '../states/leaderboard/action';
import { asyncAddThread } from '../states/threads/action';

function Homepage() {
  const {
    threads = [],
    users = [],
    authUser,
    leaderboard,
    categoryThreads = [],
  } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(asyncSeeLeaderboard());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const leaderList = leaderboard.map((data, index = 1) => ({
    ...data,
    rank: index + 1,
  }));

  if (authUser === null) {
    navigate('/login');
  }

  return (
    <div className="homepage__container">
      <div className="threads__homepage">
        <AddThreads addThread={onAddThread} />
        <AllThreads threads={threadList} />
      </div>
      <div className="leaderboard__homepage">
        <Leaderboard leaderData={leaderList} category={categoryThreads} />
      </div>
    </div>
  );
}

export default Homepage;
