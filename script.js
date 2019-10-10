"use strict";

const sizes = document.getElementsByClassName("box-modal");
const plans = document.getElementsByClassName(
  "modal__content-part2-container-box"
);
const continueBTN = document.querySelector(".modalpart2");
const backBTN = document.querySelector("button.modal__content-header-back");

continueBTN.addEventListener("click", populateModalTwo);
backBTN.addEventListener("click", showSizesAgain);

for (var i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", event => {
    sizeHighlight(event);
  });
}

for (var i = 0; i < plans.length; i++) {
  plans[i].addEventListener("click", event => {
    planHighlight(event);
  });
}

function sizeHighlight(btn) {
  document.querySelector("button.modalpart2").classList.remove("transparent");
  document.querySelector("button.modalpart2").disabled = false;
  for (var i = 0; i < sizes.length; i++) {
    sizes[i].classList.remove("selectedSize");
  }
  btn.target.classList.add("selectedSize");
}

function planHighlight(btn) {
  //console.log(btn);
  for (var i = 0; i < plans.length; i++) {
    plans[i].classList.remove("selectedBox");
    plans[i].querySelector(".choice").classList.add("hidden");
    if (plans[i].querySelectorAll("p")[3]) {
      plans[i].querySelectorAll("p")[3].classList.remove("hidden");
    }
  }
  btn.target.classList.add("selectedBox");
  btn.target.querySelector(".choice").classList.remove("hidden");

  if (btn.target.querySelectorAll("p")[3]) {
    btn.target.querySelectorAll("p")[3].classList.add("hidden");
  }
}

function populateModalTwo() {
  backBTN.classList.remove("hidden");
  document.querySelector("div.modal__content-header > h2").textContent =
    "Pick your preferred monthly subscription offer!";
  document.querySelector("div.modal__content-body").classList.add("hidden");
  document
    .querySelector("div.modal__content-additional")
    .classList.add("hidden");
  document.querySelector("button.btn-cta.modalpart2").classList.add("hidden");
  document.querySelector("button.checkout").classList.remove("hidden");
  document.querySelector(".modal__content-part2").classList.remove("hidden");
}

function showSizesAgain() {
  document.querySelector("div.modal__content-body").classList.remove("hidden");
  document
    .querySelector("div.modal__content-additional")
    .classList.remove("hidden");
  backBTN.classList.add("hidden");
  document.querySelector("div.modal__content-header > h2").textContent =
    "Select size for ActiveFit fiber jacket";
  document
    .querySelector("button.btn-cta.modalpart2")
    .classList.remove("hidden");
  document.querySelector("button.checkout").classList.add("hidden");
  document.querySelector(".modal__content-part2").classList.add("hidden");
}

document
  .querySelector("button.modal__content-header-close")
  .addEventListener("click", e => {
    document.querySelector(".modal").classList.add("hidden");
  });

const openBTN = document
  .querySelector("button.section-1__cta-btn")
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

var coll = document.querySelector(".collapsible");
var exp = false;

coll.addEventListener("click", function toggle() {
  var ele = document.getElementById("snap");
  if (ele.style.display == "block") {
    ele.style.display = "none";
  } else {
    ele.style.display = "block";
  }
  if (exp == false) {
    exp = true;
    event.target.value = "Read less";
  } else {
    exp = false;
    event.target.value = "Read more";
  }
});

var navi = document.querySelector("#nav-icon");
var list = document.querySelector(".header__menu");
var menu = document.querySelector(".desknav");

menu.addEventListener("mouseover", function() {
  list.classList.remove("hidden");
});

list.addEventListener("mouseover", function() {
  list.classList.remove("hidden");
});

menu.addEventListener("mouseout", function() {
  list.classList.add("hidden");
});

list.addEventListener("mouseout", function() {
  list.classList.add("hidden");
});

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

var tableShow = false;
document.querySelector("p.savingOpen").addEventListener("click", e => {
  if (tableShow == false) {
    tableShow = true;
    document.querySelector("div.Savings").classList.remove("hidden");
    document.querySelector("p.savingOpen").textContent = "Hide your savings";
  } else {
    tableShow = false;
    document.querySelector("div.Savings").classList.add("hidden");
    document.querySelector("p.savingOpen").textContent = "See your savings";
  }
});
