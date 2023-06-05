import { ActionType } from './action.js';

function threadReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.FILTER_CATEGORY:
      // eslint-disable-next-line array-callback-return, consistent-return
      return threads.map((thread) => {
        if (thread.category === action.payload.category) {
          return thread;
        }
        // return thread;
      }).filter((thread) => thread !== undefined);
    default:
      return threads;
  }
}

export default threadReducer;
