import { Equal, Expect } from "./helpers/type-utils";

/** Problem
 * How do we type onFocusChange?

  const addListener = (onFocusChange: unknown) => {
    window.addEventListener("focus", () => {
      onFocusChange(true);
    });

    window.addEventListener("blur", () => {
      onFocusChange(false);
    });
  };
*/

// My solution
// Here i created a type for the function, indicating the parameter type and what the function output type should be, which is void.   

type TFuncFocusChange = (isFocused: boolean) => void

const addListener = (onFocusChange: TFuncFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
