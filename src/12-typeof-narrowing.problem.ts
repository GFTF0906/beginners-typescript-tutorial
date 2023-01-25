import { expect, it } from "vitest";

/* Problem
  const coerceAmount = (amount: number | { amount: number }) => {};
*/

// My solution
// I created a 'Amount' type, and inside the function i checked if either typeof amount is object or number. 

type Amount = number | { amount: number };

const coerceAmount = (amount: Amount) => {
  if (typeof amount === 'object') return amount.amount;

  return amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
