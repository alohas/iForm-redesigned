"use strict";

const sizes = document.getElementsByClassName("box-modal");
const continueBTN = document.querySelector(".modalpart2");

continueBTN.addEventListener("click", populateModalTwo);

for (var i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", event => {
    sizeHighlight(event);
  });
}

function sizeHighlight(btn) {
  document
    .querySelector("body > div > article > div.modal__content-footer")
    .classList.remove("hidden");
  for (var i = 0; i < sizes.length; i++) {
    sizes[i].classList.remove("selectedSize");
  }
  btn.target.classList.add("selectedSize");
}

function populateModalTwo() {
  document
    .querySelector("button.modal__content-header-back.hidden")
    .classList.remove("hidden");
  document.querySelector("div.modal__content-header > h2").textContent =
    "Select more issues and save more!";
  document.querySelector("div.modal__content-body").innerHTML = "";
  document.querySelector("button.btn-cta.modalpart2").classList.add("hidden");
  document.querySelector("button.checkout").classList.remove("hidden");
}

document
  .querySelector("button.modal__content-header-close")
  .addEventListener("click", e => {
    document.querySelector(".modal").classList.add("hidden");
  });

const openBTN = document
  .querySelector("body > section.section-1 > div.section-1__cta > button")
  .addEventListener("click", e => {
    document.querySelector(".modal").classList.remove("hidden");
  });

document.querySelector(".checkout").addEventListener("click", e => {
  window.location = "form.html";
});

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
