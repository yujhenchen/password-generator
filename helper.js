export function getRandomElementsFromArray(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const elements = shuffled.slice(0, num).join("");
  return elements;
}
