"use strict";

document.querySelector("div.header__form > button:nth-child(1)").style.color =
  "red";

document.querySelector("#basket > button").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(1)").style.color =
    "black";
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "red";
  document.querySelector("#basket").classList.add("hidden");
  document.querySelector("#delivery").classList.remove("hidden");
});

document.querySelector("#delivery > button").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "black";
  document.querySelector("div.header__form > button:nth-child(3)").style.color =
    "red";
  document.querySelector("#delivery").classList.add("hidden");
  document.querySelector("#payment").classList.remove("hidden");
});
