// constats
import { users } from "./constants";

export const isUser1 = (currentUser) => currentUser === users.user1;

export const winningCombinations = {
  0: [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
  ],
  1: [
    [1, 4, 7],
    [0, 1, 2],
  ],
  2: [
    [0, 1, 2],
    [2, 5, 8],
    [2, 4, 6],
  ],
  3: [
    [0, 3, 6],
    [3, 4, 5],
  ],
  4: [
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ],
  5: [
    [2, 5, 8],
    [3, 4, 5],
  ],
  6: [
    [0, 3, 6],
    [6, 7, 8],
    [2, 4, 6],
  ],
  7: [
    [1, 4, 7],
    [6, 7, 8],
  ],
  8: [
    [2, 5, 8],
    [6, 7, 8],
    [0, 4, 8],
  ],
};

// Success Indexes -
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8
// 0, 4, 8
// 2, 4, 6

// from 0
// 0, 1, 2
// 0, 3, 6
// 0, 4, 8

// from 1
// 1, 4, 7
// 0, 1, 2

// from 2
// 0, 1, 2
// 2, 5, 8
// 2, 4, 6

// from 3
// 0, 3, 6
// 3, 4, 5

// from 4
// 3, 4, 5
// 1, 4, 7
// 0, 4, 8
// 2, 4, 6

// from 5
// 2, 5, 8
// 3, 4, 5

// from 6
// 0, 3, 6
// 6, 7, 8
// 2, 4, 6

// from 7
// 1, 4, 7
// 6, 7, 8

// from 8
// 2, 5, 8
// 6, 7, 8
// 0, 4, 8