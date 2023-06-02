// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import loading from '../../utils/customtoast';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadkDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      loading(true, error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComments({ content, id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.createComments({ content, id });
      const threadDetail = await api.getThreadDetail(id);

      dispatch(receiveThreadDetailActionCreator(threadDetail));
      loading(false, 'Succes');
    } catch (error) {
      loading(true, error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());
    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      loading(true, error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncReceiveThreadDetail,
  clearThreadkDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  asyncToogleLikeThreadDetail,
  asyncAddComments,
};
