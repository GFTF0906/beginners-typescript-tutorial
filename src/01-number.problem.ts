import { expect, it } from "vitest";

/* Problem
  export const addTwoNumbers = (a, b) => {
    return a + b;
  };
*/

// My solution
// I added the type 'number' to variables 'a' and 'b'.

export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
