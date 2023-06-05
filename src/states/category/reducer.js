import { ActionType } from './action.js';

function categoryReducer(category = [], action = {}) {
  switch (action.type) {
    case ActionType.CATEGORY:
      return action.payload.category.map((data, index) => ({
        id: index + 1,
        category: data.category,
      }));
    default:
      return category;
  }
}

export default categoryReducer;
