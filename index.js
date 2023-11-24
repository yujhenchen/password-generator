"use strict";

import {
  PASSWORD_LENGTH,
  POPUP_TOAST_POSITION,
  POPUP_DISPLAY_TIME,
  PASSWORD_COPIED_RESULT_MESSAGE,
  Theme,
} from "./constants.js";
import { characters } from "./constants.js";
import { getRandomElementsFromArray } from "./helper.js";

const passwordLengthInput = document.getElementById("password-length-input");
const GeneratePasswordsBtn = document.getElementById("generate-passwords-btn");
const passwordBlocks = document.querySelectorAll(
  "div[class*='password-block']"
);
const passwordCopiedToast = document.getElementById("pop-up-toast");
const themeToggle = document.querySelector("#toggle-light-dark");
const symbolsToggle = document.querySelector("#toggle-symbols");
const numbersToggle = document.querySelector("#toggle-numbers");

const toggleLightDarkIcon = document.querySelector("#toggle-light-dark-icon");
const lightModeIcon = `<i class="fa-solid fa-sun"></i>`;
const darkModeIcon = `<i class="fa-solid fa-moon"></i>`;

const pwdSet = Object.preventExtensions({
  first: "",
  second: "",
});

const appData = Object.preventExtensions({
  theme: localStorage.getItem("theme") ?? Theme.Light,
  withSymbols: false,
  withNumbers: false,
});

let passwordLength = PASSWORD_LENGTH.MIN;
let toastTimerID = -1;

themeToggle.addEventListener("click", (event) => {
  if (!appData.theme) {
    appData.theme = Theme.Dark;
  } else {
    if (appData.theme == Theme.Dark) appData.theme = Theme.Light;
    else appData.theme = Theme.Dark;
  }
  localStorage.setItem("theme", appData.theme);
  render();
});

symbolsToggle.addEventListener(
  "change",
  () => (appData.withSymbols = appData.withSymbols ? false : true)
);

numbersToggle.addEventListener(
  "change",
  () => (appData.withNumbers = appData.withNumbers ? false : true)
);

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
  document.querySelector("html").setAttribute("class", appData.theme);
  toggleLightDarkIcon.innerHTML =
    appData.theme === Theme.Dark ? lightModeIcon : darkModeIcon;
}

render();
