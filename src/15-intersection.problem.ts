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

/** Problem
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }

  export const getDefaultUserAndPosts = (): unknown => {
    return {
      id: "1",
      firstName: "Matt",
      lastName: "Pocock",
      posts: [
        {
          id: "1",
          title: "How I eat so much cheese",
          body: "It's pretty edam difficult",
        },
      ],
    };
  };
*/

// My solution
// Created a type that is User AND an object with property 'posts' of type Post[].

type TUserAndPosts = User & { posts: Post[] }

export const getDefaultUserAndPosts = (): TUserAndPosts  => {
  return {
    id: "1",
    firstName: "Guilherme",
    lastName: "Fontebasso",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
