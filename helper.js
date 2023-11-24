export function getRandomElementsFromArray(
  arr,
  length,
  withSymbols,
  withNumbers
) {
  if (!withSymbols && !withNumbers) arr = arr.filter((ele) => isLetter(ele));
  else if (!withSymbols) arr.filter((ele) => isNumberOrLetter(ele));
  else if (!withNumbers) arr = arr.filter((ele) => !isNumber(ele));

  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, length).join("");
}

export function isNumberOrLetter(char) {
  return /[^A-Za-z0-9]/g.test(char);
}

export function isNumber(char) {
  return /^\d+$/g.test(char);
}

export function isLetter(char) {
  return /^[a-zA-Z]$/g.test(char);
}
