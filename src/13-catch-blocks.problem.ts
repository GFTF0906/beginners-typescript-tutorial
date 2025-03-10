import { expect, it } from "vitest";

/* Problem
  const tryCatchDemo = (state: "fail" | "succeed") => {
    try {
      if (state === "fail") {
        throw new Error("Failure!");
      }
    } catch (e) {
      return e.message;
    }
  };
*/

// My solution
// Checked if 'e' is instanceof Error, and then returned the e.message.

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }

    return state;
  } catch (e) {
    if (e instanceof Error) return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
