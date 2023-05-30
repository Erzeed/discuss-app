// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ text, replyTo = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const talk = await api.createThread({ text, replyTo });
      dispatch(addThreadActionCreator(talk));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeThreads(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(showLoading());
    try {
      await api.toggleLikeTalk(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  asyncAddThread,
  asyncToogleLikeThreads,
};
