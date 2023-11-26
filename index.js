"use strict";

import {
  PASSWORD_LENGTH,
  POPUP_TOAST_POSITION,
  POPUP_DISPLAY_TIME,
  PASSWORD_COPIED_RESULT_MESSAGE,
  UNIT_PIXEL,
  Theme,
  characters,
} from "./constants.js";
import {
  getFilteredArray,
  getRandomElementsFromArray,
  debounce,
} from "./helper.js";
import appData from "./store.js";

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

// debounce
const hidePasswordCopiedToast = debounce(hideToast, POPUP_DISPLAY_TIME);

themeToggle.addEventListener("click", () => {
  if (appData.theme === Theme.Dark) appData.theme = Theme.Light;
  else appData.theme = Theme.Dark;
  render();
});

symbolsToggle.addEventListener(
  "change",
  () => (appData.rules.withSymbols = !appData.rules.withSymbols)
);

numbersToggle.addEventListener(
  "change",
  () => (appData.rules.withNumbers = !appData.rules.withNumbers)
);

passwordLengthInput.addEventListener("input", (event) => {
  const value = event.target.value;

  if (isNaN(value)) {
    appData.passwordLength = PASSWORD_LENGTH.MIN;
    passwordLengthInput.value = "";
  } else appData.passwordLength = value;
  render();
});

passwordLengthInput.addEventListener("focusout", (event) => {
  const value = event.target.value;

  if (value > PASSWORD_LENGTH.MAX) appData.passwordLength = PASSWORD_LENGTH.MAX;
  else if (value < PASSWORD_LENGTH.MIN)
    appData.passwordLength = PASSWORD_LENGTH.MIN;
  render();
});

GeneratePasswordsBtn.addEventListener("click", () => {
  const newPasswords = [];
  const filteredArray = getFilteredArray(
    [...characters],
    appData.rules.withSymbols,
    appData.rules.withNumbers
  );

  for (let i = 0; i < appData.passwords.length; i += 1) {
    newPasswords.push(
      getRandomElementsFromArray(filteredArray, appData.passwordLength).join("")
    );
  }
  appData.passwords = newPasswords;
  render();
});

passwordBlocks.forEach((block) => {
  block.addEventListener("click", async (event) => {
    await clickAndCopy(event.target.innerHTML);

    const cursor = {
      x: event.clientX,
      y: event.clientY,
    };

    showToast(cursor);
    hidePasswordCopiedToast();
    render();
  });
});

function showToast(cursor) {
  const { x, y } = cursor;
  passwordCopiedToast.style.top = `${
    y + POPUP_TOAST_POSITION.show
  }${UNIT_PIXEL}`;
  passwordCopiedToast.style.left = `${
    x + POPUP_TOAST_POSITION.show
  }${UNIT_PIXEL}`;
}

function hideToast() {
  passwordCopiedToast.style.top =
    passwordCopiedToast.style.left = `${POPUP_TOAST_POSITION.hide}${UNIT_PIXEL}`;
}

async function clickAndCopy(text) {
  try {
    if (text) {
      await navigator.clipboard.writeText(text);
      appData.toastMessage = `${PASSWORD_COPIED_RESULT_MESSAGE.SUCCEED}: ${text}`;
    } else appData.toastMessage = "Please generate Passwords first!";
  } catch (err) {
    appData.toastMessage = `${PASSWORD_COPIED_RESULT_MESSAGE.FAILED}: ${err}`;
  }
}

function renderTheme() {
  document.querySelector("html").setAttribute("class", appData.theme);
  toggleLightDarkIcon.innerHTML =
    appData.theme === Theme.Dark ? lightModeIcon : darkModeIcon;
}

function render() {
  renderTheme();
  appData.passwords.forEach((pwd, index) => {
    passwordBlocks[index].textContent = pwd;
  });

  passwordLengthInput.value = appData.passwordLength;
  passwordCopiedToast.textContent = appData.toastMessage;
}

render();
