"use strict";

import { PASSWORD_LENGTH } from "./constants.js";
import { characters } from "./constants.js";

const passwordLengthInput = document.getElementById("password-length-input");
const GeneratePasswordsBtn = document.getElementById("generate-passwords-btn");
const passwordBlocks = document.querySelectorAll(
  "div[class*='password-block']"
);
const passwordCopiedToast = document.getElementById("pop-up-toast");

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

passwordBlocks.forEach((block) => {
  block.addEventListener("click", async (event) => {
    await clickAndCopy(event.target.innerHTML);

    const cursor = {
      x: event.clientX,
      y: event.clientY,
    };
    showPasswordCopiedToast(cursor);
  });
});

function getRandomElementsFromArray(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const elements = shuffled.slice(0, num).join("");
  return elements;
}

function showPasswordCopiedToast(cursor) {
  const { x, y } = cursor;
  passwordCopiedToast.style.top = y + 20 + "px";
  passwordCopiedToast.style.left = x + 20 + "px";
  render();
}

async function clickAndCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`Password copied to clipboard: ${text}`);
  } catch (err) {
    console.error(`Failed to copy: ${err}`);
  }
}

function render() {
  let count = 0;
  for (const property in pwdSet) {
    passwordBlocks[count].textContent = pwdSet[property];
    count++;
  }
  passwordLengthInput.value = passwordLength;
}

render();
