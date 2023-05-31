// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadsDetail/reducer';
import threadReducer from './threads/reducer';
import usersReducer from './user/reducer';
import leaderboardReducer from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
