"use strict";

document.querySelector("div.header__form > button:nth-child(1)").style.color =
  "#ff3366";
document.querySelector("#basket > button").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(1)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "#ff3366";
  document.querySelector("#basket").classList.add("hidden");
  document.querySelector("#delivery").classList.remove("hidden");
});

document.querySelector("#delivery > button").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(3)").style.color =
    "#ff3366";
  document.querySelector("#delivery").classList.add("hidden");
  document.querySelector("#payment").classList.remove("hidden");
});

document.querySelector(".delivery").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(1)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "#ff3366";
  document.querySelector("div.header__form > button:nth-child(3)").style.color =
    "#888b8d";
  document.querySelector("#basket").classList.add("hidden");
  document.querySelector("#delivery").classList.remove("hidden");
  document.querySelector("#payment").classList.add("hidden");
});

document.querySelector(".payment").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(1)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(3)").style.color =
    "#ff3366";
  document.querySelector("#basket").classList.add("hidden");
  document.querySelector("#delivery").classList.add("hidden");
  document.querySelector("#payment").classList.remove("hidden");
});

document.querySelector(".basket").addEventListener("click", e => {
  document.querySelector("div.header__form > button:nth-child(1)").style.color =
    "#ff3366";
  document.querySelector("div.header__form > button:nth-child(2)").style.color =
    "#888b8d";
  document.querySelector("div.header__form > button:nth-child(3)").style.color =
    "#888b8d";
  document.querySelector("#basket").classList.remove("hidden");
  document.querySelector("#delivery").classList.add("hidden");
  document.querySelector("#payment").classList.add("hidden");
});

var navi = document.querySelector("#nav-icon");
var list = document.querySelector(".header__menu");

navi.addEventListener("click", function() {
  if (navi.classList.contains("open")) {
    navi.classList.remove("open");
  } else navi.classList.add("open");
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
  } else list.classList.add("hidden");
});

document.querySelectorAll("li.menu__list-item").forEach(item => {
  item.addEventListener("click", event => {
    list.classList.add("hidden");
  });
});
