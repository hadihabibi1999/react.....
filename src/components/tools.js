const array = [1, 2, 3, 4, 6, -4, 0, -7, 10];

//chaining 
const filtered = array
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value < 10);

export default filtered;
