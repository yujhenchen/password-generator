"use strict";

import { PASSWORD_LENGTH } from "./constants.js";
import { characters } from "./constants.js";

const passwordLengthInput = document.getElementById("password-length-input");
const GeneratePasswordsBtn = document.getElementById("generate-passwords-btn");
const passwordFirst = document.getElementById("password-first");
const passwordSecond = document.getElementById("password-second");

const pwdSet = Object.preventExtensions({
  first: "",
  second: "",
});

let passwordLength = PASSWORD_LENGTH.MIN;

passwordLengthInput.addEventListener("input", (event) => {
  const value = event.target.value;
  if (isNaN(value)) {
    passwordLength = PASSWORD_LENGTH.MIN;
    passwordLengthInput.value = "";
  } else passwordLength = value;
  render();
});

passwordLengthInput.addEventListener("focusout", (event) => {
  const value = event.target.value;
  if (value > PASSWORD_LENGTH.MAX) passwordLength = PASSWORD_LENGTH.MAX;
  else if (value < PASSWORD_LENGTH.MIN) passwordLength = PASSWORD_LENGTH.MIN;
  render();
});

GeneratePasswordsBtn.addEventListener("click", () => {
  const pwdLength = +passwordLength;

  for (const property in pwdSet) {
    pwdSet[property] = getRandomElementsFromArray([...characters], pwdLength);
  }
  render();
});

passwordFirst.addEventListener("click", async (event) => {
  await clickAndCopy(event.target.innerHTML);
});

passwordSecond.addEventListener("click", async (event) => {
  await clickAndCopy(event.target.innerHTML);
});

function getRandomElementsFromArray(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const elements = shuffled.slice(0, num).join("");
  return elements;
}

async function clickAndCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`"Content copied to clipboard: ${text}`);
  } catch (err) {
    console.error(`Failed to copy: ${err}`);
  }
}

function render() {
  passwordFirst.textContent = pwdSet.first;
  passwordSecond.textContent = pwdSet.second;
  passwordLengthInput.value = passwordLength;
}

render();
