// eslint-disable-next-line no-unused-vars
import api from '../../utils/api';

const ActionType = {
  CATEGORY: 'CATEGORY',
};

function receiveUsersCategory(category) {
  return {
    type: ActionType.CATEGORY,
    payload: {
      category,
    },
  };
}
export { receiveUsersCategory, ActionType };
