"use strict";

// const DOM = {
//     menuIcon: document.querySelector(".header__burgermenu"),
//     mobileNav: document.querySelector(".header__menu"),
//     menuIconAfter: document.querySelector(".header__burgermenu::after"),
//     menuIconBefore: document.querySelector(".header__burgermenu::before")
//   };

//   DOM.menuIcon.addEventListener("click", () => {
//     DOM.mobileNav.classList.toggle("hidden");
//     window.getComputedStyle(DOM.menuIcon, ":after").style.display = "none";
//   });

/* Gallery Slider */

let imageNotationArray = ["-1", "-2", "-3", "-4", "-5", "-6"];

document.querySelectorAll(".circle").forEach(element => {
  element.addEventListener("click", showNavigationImage);
});

function showNavigationImage() {
  let className = event.target.classList[1];
  let classNumber = className.slice(6, 8);
  document
    .querySelector(`.img-slider${classNumber}`)
    .classList.remove("no-display");
  let previousActiveElement = document.querySelector(".circle-active");
  let previousClassName = previousActiveElement.classList[1];
  let previousClassNumber = previousClassName.slice(6, 8);
  document
    .querySelector(`.img-slider${previousClassNumber}`)
    .classList.add("no-display");
  previousActiveElement.classList.remove("circle-active");
  event.target.classList.add("circle-active");
}

document
  .querySelector(".btn-gallery-left")
  .addEventListener("click", slideLeft);

function slideLeft() {
  let activeImage;
  for (let i = 0; i < imageNotationArray.length; i++) {
    document
      .querySelectorAll(`.img-slider${imageNotationArray[i]}`)
      .forEach(element => {
        if (element.classList[1] == undefined) {
          activeImage = element;
        }
      });
  }
  let leftImageClassNumber;
  let activeImageClassNumber = activeImage.classList[0].slice(11, 12);
  activeImageClassNumber = parseInt(activeImageClassNumber);
  if (activeImageClassNumber == 1) {
    leftImageClassNumber = imageNotationArray.length;
  } else {
    leftImageClassNumber = activeImageClassNumber - 1;
  }
  document
    .querySelector(`.img-slider-${activeImageClassNumber}`)
    .classList.add("no-display");
  document
    .querySelector(`.img-slider-${leftImageClassNumber}`)
    .classList.remove("no-display");

  document
    .querySelector(`.circle-${activeImageClassNumber}`)
    .classList.remove("circle-active");
  document
    .querySelector(`.circle-${leftImageClassNumber}`)
    .classList.add("circle-active");
}

document
  .querySelector(".btn-gallery-right")
  .addEventListener("click", slideRight);

function slideRight() {
  let activeImage;
  for (let i = 0; i < imageNotationArray.length; i++) {
    document
      .querySelectorAll(`.img-slider${imageNotationArray[i]}`)
      .forEach(element => {
        if (element.classList[1] == undefined) {
          activeImage = element;
        }
      });
  }
  let rightImageClassNumber;
  let activeImageClassNumber = activeImage.classList[0].slice(11, 12);
  activeImageClassNumber = parseInt(activeImageClassNumber);
  if (activeImageClassNumber == imageNotationArray.length) {
    rightImageClassNumber = 1;
  } else {
    rightImageClassNumber = activeImageClassNumber + 1;
  }
  document
    .querySelector(`.img-slider-${activeImageClassNumber}`)
    .classList.add("no-display");
  document
    .querySelector(`.img-slider-${rightImageClassNumber}`)
    .classList.remove("no-display");

  document
    .querySelector(`.circle-${activeImageClassNumber}`)
    .classList.remove("circle-active");
  document
    .querySelector(`.circle-${rightImageClassNumber}`)
    .classList.add("circle-active");
}

var coll = document.querySelector(".collapsible");

coll.addEventListener("click", function toggle() {
  var ele = document.getElementById("snap");
  if (ele.style.display == "block") {
    ele.style.display = "none";
  } else {
    ele.style.display = "block";
  }
  if (event.target.value === "Read more") {
    event.target.value = "Read less";
  } else {
    event.target.value = "Read more";
  }
});

var navi = document.querySelector("#nav-icon");
var list = document.querySelector("#navig");

navi.addEventListener("click", function() {
  if (navi.classList.contains("open")) {
    navi.classList.remove("open");
  } else navi.classList.add("open");
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
  } else list.classList.add("hidden");
});
