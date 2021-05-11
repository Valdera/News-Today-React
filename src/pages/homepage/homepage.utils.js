// A function to generate a random color pallete
export const generateRandomPallete = (id) => {
  const palletes = ['#73D673', '#FEBD7D', '#F886A8', '#A0DDE0', '#EC4F43'];

  if (id % 5 === 0) {
    return palletes[4];
  } else if (id % 4 === 0) {
    return palletes[3];
  } else if (id % 3 === 0) {
    return palletes[2];
  } else if (id % 2 === 0) {
    return palletes[1];
  } else {
    return palletes[0];
  }
};
