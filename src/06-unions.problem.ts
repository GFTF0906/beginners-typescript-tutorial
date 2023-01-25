interface User {
  id: number;
  firstName: string;
  lastName: string;
  /** Problem
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
  
   role: string;
  */
  
  // My Solution
  // I used a union type, to make sure that role is in a set of specific values.

  role: 'admin' | 'user' | 'super-admin'
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
