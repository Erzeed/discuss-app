import { ActionType } from './action';

function threadReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            likes: thread.likes.includes(action.payload.userId)
              ? thread.likes.filter((id) => id !== action.payload.userId)
              : thread.likes.concat([action.payload.userId]),
          };
        }
        return thread;
      });
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
