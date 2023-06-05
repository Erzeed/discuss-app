// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer.js';
import isPreloadReducer from './isPreload/reducer.js';
import threadDetailReducer from './threadsDetail/reducer.js';
import threadReducer from './threads/reducer.js';
import usersReducer from './user/reducer.js';
import leaderboardReducer from './leaderboard/reducer.js';
import categoryReducer from './category/reducer.js';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    leaderboard: leaderboardReducer,
    categoryThreads: categoryReducer,
  },
});

export default store;
