import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/homepage.css';
import AddThreads from '../components/add-threads';
import AllThreads from '../components/allThreads';
import Leaderboard from '../components/leaderboard';
import asyncPopulateUsersAndThreads from '../states/shared/action';

function Homepage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  // const onAddTalk = (text) => {
  //   // @TODO: dispatch async action to add talk
  //   dispatch(asyncAddTalk({ text }));
  // };

  // const onLike = (id) => {
  //   // @TODO: dispatch async action to toggle like talk
  //   dispatch(asyncToogleLikeTalk(id));
  // };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  return (
    <div className="homepage__container">
      <div className="threads__homepage">
        <AddThreads />
        <AllThreads threads={threadList} />
      </div>
      <div className="leaderboard__homepage">
        <Leaderboard />
      </div>
    </div>
  );
}

export default Homepage;
