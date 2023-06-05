/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api.js';

const ActionType = {
  SEE_LEADERBOARD: 'SEE_LEADERBOARD',
};

function receiveLeaderboard(leaderboard) {
  return {
    type: ActionType.SEE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncSeeLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const resp = await api.seeLeaderboard();
      dispatch(receiveLeaderboard(resp));
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncSeeLeaderboard, receiveLeaderboard };
