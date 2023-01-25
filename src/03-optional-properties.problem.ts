import { expect, it } from "vitest";

/* Problem
  export const getName = (params: { first: string; last: string }) => {
    if (params.last) {
      return `${params.first} ${params.last}`;
    }
    return params.first;
  };
*/

// My solution
// I inserted a '?' to make the property optional.

type TParams = {
  first: string,
  last?: string
}

export const getName = (params: TParams) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Guilherme",
  });

  expect(name).toEqual("Guilherme");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Guilherme",
    last: "Fontebasso",
  });

  expect(name).toEqual("Guilherme Fontebasso");
});
