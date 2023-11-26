"use strict";

import { Theme, POPUP_DISPLAY_TIME, PASSWORD_LENGTH } from "./constants.js";
import { isValidThemeValue } from "./helper.js";

let instance = null;

class AppData {
  #_passwordCount = 2;
  #_passwords = [];
  #_themeKey = "theme";
  #_passwordLength = PASSWORD_LENGTH.MIN;
  #_rules;
  //   #_toastTimerID;

  constructor() {
    if (instance) {
      console.log("GameData object exists");
      return;
    }
    this.initPasswordArray();
    this.#_rules = {
      withSymbols: false,
      withNumbers: false,
    };
  }

  get theme() {
    const theme = localStorage.getItem(this.#_themeKey);
    if (!theme || !isValidThemeValue(theme)) {
      localStorage.setItem(this.#_themeKey, Theme.Light);
      return Theme.Light;
    }
    return theme;
  }

  set theme(theme) {
    if (!isValidThemeValue(theme)) {
      console.log(`Error: set theme: invalid value: ${theme}`);
      return;
    }
    localStorage.setItem(this.#_themeKey, theme);
  }

  get rules() {
    return this.#_rules;
  }

  set rules([withSymbols, withNumbers]) {
    this.#_rules.withSymbols = withSymbols;
    this.#_rules.withNumbers = withNumbers;
  }

  get passwordLength() {
    return this.#_passwordLength;
  }

  set passwordLength(value) {
    this.#_passwordLength = value;
  }

  get passwords() {
    return this.#_passwords;
  }

  set passwords(arr) {
    this.#_passwords = arr;
  }

  initPasswordArray() {
    for (let i = 0; i < this.#_passwordCount; i += 1) {
      this.#_passwords.push("");
    }
  }

  //   showPasswordCopiedToast(func) {
  //     if (this.#_toastTimerID) clearTimeout(toastTimerID);
  //     func();
  //     this.#_toastTimerID = setTimeout(() => func(), POPUP_DISPLAY_TIME);
  //   }
}

const appData = Object.freeze(new AppData());
export default appData;
