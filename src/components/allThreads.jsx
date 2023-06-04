/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../style/allthreads.css';
import CardThreads from './cardThreads';

function allThreads({ threads }) {
  console.log(threads);
  // const threadList = threads.map((thread) => {
  //   if (thread !== undefined) {
  //     return {
  //       ...thread,
  //       user: users.find((user) => user.id === thread.ownerId),
  //       authUser: authUser.id,
  //     };
  //   }
  // });
  return (
    <div className="allthreads__container">
      {
        threads.map((thread) => (
          <CardThreads key={thread.id} {...thread} />
        ))
      }
    </div>
  );
}

export default allThreads;
