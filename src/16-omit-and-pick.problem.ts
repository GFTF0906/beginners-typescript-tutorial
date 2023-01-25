import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/** Problem
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 
  type MyType = unknown;
 */

// My solutions

// 1.
// Here i just omitted the 'id' from User type.
type MyTypeOmit = Omit<User, 'id'>;

// 2.
// Here i only pick 'firstName' and 'lastName' properties.
type MyTypePick = Pick<User, 'firstName' | 'lastName'>;


type tests = [Expect<Equal<MyTypeOmit, { firstName: string; lastName: string }>>, Expect<Equal<MyTypePick, { firstName: string; lastName: string }>>];
