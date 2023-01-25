import { expect, it } from "vitest";

const createCache = () => {
  /* Problem
    const cache = {};
  */
  
  // My solution
  // I used a Record<string, string> to map the key value pair with the same type.
  
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Gui");

  expect(cache.cache["123"]).toEqual("Gui");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Gui");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
