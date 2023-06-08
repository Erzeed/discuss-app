/**
* test scenario for leaderboar reducer test
*
* - leaderboard reducer
*  - should return initial state when action unknown
*  - should return data leaderboard when give action SEE_LEADERBOARD
*
*/
import { describe, it, expect } from 'vitest';
import leaderboardReducer from './reducer';

describe('leaderboardReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboard when given by SEE_LEADERBOARD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SEE_LEADERBOARD',
      payload: {
        leaderboard: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboard);
  });
});
