/**
* test scenario for leaderboar reducer test
*
* - leaderboard reducer
*  - mengembalikan nilai state ketika nilai state tidak diketahui
*  - mengembalikan nilai leaderboard ketika terdapat action SEE_LEADERBOARD
*
*/
import { describe, it, expect } from 'vitest';
import leaderboardReducer from './reducer';

describe('talkReducers function', () => {
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
        leaderboards: [
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
