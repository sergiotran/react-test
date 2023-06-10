export const swap = (arr, from, to) => {
  if(!arr || !arr.length) {
    return [];
  }

  const newArr = [...arr];

  const temp = newArr[from];
  newArr[from] = newArr[to];
  newArr[to] = temp;

  return newArr;
}