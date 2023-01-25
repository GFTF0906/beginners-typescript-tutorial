import { Equal, Expect } from "./helpers/type-utils";

/** Problem
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?

  interface User {
    id: string;
    firstName: string;
    lastName: string;
  }

  interface Post {
    id: string;
    title: string;
    body: string;
  }

  interface Comment {
    id: string;
    comment: string;
  }
*/

// My solution
// I created a unique interface called ID and extended it through all interfaces.

interface ID {
  id: string;
}

interface User extends ID {
  firstName: string;
  lastName: string;
}

interface Post extends ID {
  title: string;
  body: string;
}

interface Comment extends ID {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
