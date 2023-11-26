"use strict";

import { Theme } from "./constants.js";

export const isNumberOrLetter = (char) => /[A-Za-z0-9]/g.test(char);

export const isNumber = (char) => /[0-9]/g.test(char);

export const isLetter = (char) => /[a-zA-Z]/g.test(char);

export const getFilteredArray = (arr, withSymbols, withNumbers) => {
  if (!withSymbols && !withNumbers) return arr.filter((ele) => isLetter(ele));
  else if (!withSymbols) return arr.filter((ele) => isNumberOrLetter(ele));
  else if (!withNumbers) return arr.filter((ele) => !isNumber(ele));
  return arr;
};

export const getRandomElementsFromArray = (arr, length) => {
  if (arr && arr.length > 0)
    return arr.sort(() => 0.5 - Math.random()).slice(0, length);
  return [];
};

export const isValidThemeValue = (themeValue) =>
  themeValue !== Theme.Light || themeValue !== Theme.Dark;

export function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
