/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../style/allthreads.css';
import CardThreads from './cardThreads';

function allThreads({ threads }) {
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
