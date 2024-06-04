"use strict";

const displayMode = document.getElementById("display-mode");
const modeBtn = document.querySelector(".mode");

document.getElementById("copy").innerText = new Date().getFullYear();

// CHANGE DISPLAY MODE
let mode = "sun";

// watch for changes and detect system display mode (dark or light)
matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    displayMode.href =
      newColorScheme == "dark" ? "css/dark-mode.css" : "css/light-mode.css";
    modeBtn.className = `fa-solid mode fa-${mode}`;
    mode = mode == "moon" ? "sun" : "moon";
  }
);

// set user preference display mode
modeBtn.addEventListener("click", () => {
  displayMode.href =
    mode == "moon" ? "css/light-mode.css" : "css/dark-mode.css";
  modeBtn.className = `fa-solid mode fa-${mode}`;
  mode = mode == "moon" ? "sun" : "moon";
});
