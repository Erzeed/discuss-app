// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import loading from '../../utils/customtoast';
import api from '../../utils/api';

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
      loading(false, error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncSeeLeaderboard };
