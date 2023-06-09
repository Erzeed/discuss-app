/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import loading from '../../utils/customtoast.js';
import api from '../../utils/api.js';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  FILTER_CATEGORY: 'FILTER_CATEGORY',
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

function addThreadActionFilter(category) {
  return {
    type: ActionType.FILTER_CATEGORY,
    payload: {
      category,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const talk = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(talk));
      loading(false, 'Succes');
    } catch (error) {
      loading(true, error.message);
    }
    dispatch(hideLoading());
  };
}

function filterByCategory(category) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(addThreadActionFilter(category));
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  filterByCategory,
};
