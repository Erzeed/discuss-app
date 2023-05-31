import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    // dispatch(asyncSeeLeaderboard());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  // const onLike = (id) => {
  //   // @TODO: dispatch async action to toggle like talk
  //   dispatch(asyncToogleLikeTalk(id));
  // };
  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  const leaderList = leaderboard.map((data, index = 1) => ({
    ...data,
    rank: index + 1,
  }));
  // const categoryPopuler = threadList.map((data, index) => ({
  //   id: index + 1,
  //   category: data.category,
  // }));
  console.log(threadList);
  return (
    <div className="homepage__container">
      <div className="threads__homepage">
        <AddThreads addThread={onAddThread} />
        {/* <AllThreads threads={threadList} /> */}
      </div>
      <div className="leaderboard__homepage">
        {/* <Leaderboard leaderData={leaderList} category={categoryPopuler} /> */}
      </div>
    </div>
  );
}

export default Homepage;
