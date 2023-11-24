"use strict";

import {
  PASSWORD_LENGTH,
  POPUP_TOAST_POSITION,
  POPUP_DISPLAY_TIME,
  PASSWORD_COPIED_RESULT_MESSAGE,
} from "./constants.js";
import { characters } from "./constants.js";
import { getRandomElementsFromArray } from "./helper.js";

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

let toastTimerID = -1;
function showPasswordCopiedToast(cursor) {
  if (toastTimerID) clearTimeout(toastTimerID);
  setPasswordCopiedToastPosition(cursor, true);

  toastTimerID = setTimeout(
    () => setPasswordCopiedToastPosition(cursor, false),
    POPUP_DISPLAY_TIME
  );
}

function setPasswordCopiedToastPosition(cursor, show) {
  const unit = "px";
  if (show) {
    const { x, y } = cursor;
    passwordCopiedToast.style.top = `${x + POPUP_TOAST_POSITION.show}${unit}`;
    passwordCopiedToast.style.left = `${y + POPUP_TOAST_POSITION.show}${unit}`;
  } else {
    passwordCopiedToast.style.top =
      passwordCopiedToast.style.left = `${POPUP_TOAST_POSITION.hide}${unit}`;
  }
  render();
}

async function clickAndCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`${PASSWORD_COPIED_RESULT_MESSAGE.SUCCEED}: ${text}`);
  } catch (err) {
    console.error(`${PASSWORD_COPIED_RESULT_MESSAGE.FAILED}: ${err}`);
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
