"use strict";
// console.log(document.querySelector("header").textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector(".guess").value = 7; //for input element we use value instead of textcontent
// document.querySelector(".score").textContent = 2;
// function myFunction() {
//
// }

function Display(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //if there is no number
  if (!guess) {
    console.log(guess, typeof guess);
    Display("Number is too low!");

    //if guesses right
  } else if (guess === secretNumber) {
    Display("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // if guesses wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? Display("TOO HIGH") : Display("TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;

      // when score is 0
    } else {
      Display("You lost the game!");
      document.querySelector("body").style.backgroundColor = "red";

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";

  //left
  document.querySelector(".guess").value = "";
  Display("Start guessing...");

  //right
  document.querySelector(".score").textContent = score;
});
