/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api.js';
import { receiveUsersActionCreator } from '../user/action.js';
import { receiveThreadsActionCreator } from '../threads/action.js';
import { setAuthUserActionCreator } from '../authUser/action.js';
import { receiveUsersCategory } from '../category/action.js';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const authUser = await api.getOwnProfile();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
      dispatch(setAuthUserActionCreator(authUser));
      dispatch(receiveUsersCategory(threads));
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndThreads;
