"use strict";

import { PASSWORD_LENGTH } from "./constants.js";

const passwordLengthInput = document.getElementById("password-length-input");
passwordLengthInput.addEventListener("input", (event) => {
  const value = event.target.value;
  if (isNaN(value)) passwordLengthInput.value = "";
});

passwordLengthInput.addEventListener("focusout", (event) => {
  const value = event.target.value;
  if (value > PASSWORD_LENGTH.MAX)
    passwordLengthInput.value = PASSWORD_LENGTH.MAX;
  else if (value < PASSWORD_LENGTH.MIN)
    passwordLengthInput.value = PASSWORD_LENGTH.MIN;
});
