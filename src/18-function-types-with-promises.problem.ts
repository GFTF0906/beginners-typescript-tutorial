import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/* Problem 
  const createThenGetUser = async (
    createUser: unknown,
    getUser: unknown,
  ): Promise<User> => {
    const userId: string = await createUser();

    const user = await getUser(userId);

    return user;
  };
*/

const createThenGetUser = async (
  createUser: () => Promise<string>,
  getUser: (userId: string) => Promise<User>
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "1",
    async (id) => ({
      id,
      firstName: "Gui",
      lastName: "Fontebasso",
    }),
  );

  expect(user).toEqual({
    id: "1",
    firstName: "Gui",
    lastName: "Fontebasso",
  });
});
