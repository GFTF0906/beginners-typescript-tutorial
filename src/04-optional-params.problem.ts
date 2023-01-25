import { expect, it } from "vitest";


/* Problem
  export const getName = (first: string, last: string) => {
    if (last) {
      return `${first} ${last}`;
    }
    return first;
  };
*/

// My solution
// I inserted a '?' to make the parameter optional.

export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Gui");

  expect(name).toEqual("Gui");
});

it("Should work with the first and last name", () => {
  const name = getName("Gui", "Fontebasso");

  expect(name).toEqual("Gui Fontebasso");
});
