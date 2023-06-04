// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { setAuthUserActionCreator } from '../authUser/action';
import { receiveUsersCategory } from '../category/action';
import loading from '../../utils/customtoast';

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
      loading(false, error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndThreads;
