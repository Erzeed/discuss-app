// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { setAuthUserActionCreator } from '../authUser/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const authUser = await api.getOwnProfile();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndThreads;
