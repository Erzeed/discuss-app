import React from 'react';
import '../style/allthreads.css';
import CardThreads from './cardThreads';

function allThreads() {
  return (
    <div className="allthreads__container">
      <CardThreads />
      <CardThreads />
      <CardThreads />
    </div>
  );
}

export default allThreads;
