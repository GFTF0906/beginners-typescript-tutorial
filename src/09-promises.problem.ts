interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

/* Problem
  export const fetchLukeSkywalker = async (): LukeSkywalker => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });

    return data;
  };
*/

// My solution
// Typed the 'data' variable with type 'LukeSkywalker', which automatically set the function return type to Promise<LukeSkywalker>.

export const fetchLukeSkywalker = async () => {
  const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};
