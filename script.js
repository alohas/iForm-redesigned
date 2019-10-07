"use strict";

const DOM = {
  menuIcon: document.querySelector(".header__burgermenu"),
  mobileNav: document.querySelector(".header__menu"),
  menuIconAfter: document.querySelector(".header__burgermenu::after"),
  menuIconBefore: document.querySelector(".header__burgermenu::before")
};

DOM.menuIcon.addEventListener("click", () => {
  DOM.mobileNav.classList.toggle("hidden");
  window.getComputedStyle(DOM.menuIcon, ":after").style.display = "none";
});
