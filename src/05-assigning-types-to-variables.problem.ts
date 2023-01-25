import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/** Problem
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?

  const defaultUser = {};
*/

// My solution
// I defined the type of 'defaultUser' as 'User', and passed default values.

const defaultUser: User = {
  id: 1,
  firstName: 'Guilherme',
  lastName: 'Fontebasso',
  isAdmin: true
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
