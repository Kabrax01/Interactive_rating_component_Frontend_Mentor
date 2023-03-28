"use strict";

const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thank_you");
const userRating = document.querySelector(".selection");
const ratingButton = document.querySelectorAll(".button");
const submitButton = document.querySelector(".submit_button");

let valueArr = ['none'];

console.log(valueArr.length);

window.addEventListener("load", () => {
  ratingButton.forEach((item) => {
    item.addEventListener("click", () => {
      valueArr.push(item.value);
    });
  });
});

submitButton.addEventListener("click", function () {
  userRating.textContent = `You selected ${valueArr.at(-1)} out of 5`;
  ratingSection.classList.toggle("hiden");
  thankYouSection.classList.toggle("hiden");
});
