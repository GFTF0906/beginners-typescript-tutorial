import { expect, it } from "vitest";

/* Problem
  export const addTwoNumbers = (params) => {
    return params.first + params.second;
  };
*/

// My solution
// I created an Type called 'TParams' with the correct properties to the 'params' parameter.

type TParams = {
  first: number,
  second: number
}

export const addTwoNumbers = (params: TParams) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
