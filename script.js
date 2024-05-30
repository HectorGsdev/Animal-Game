"use strict";

// Array with the name of the animals, each row is a different languge
let animalName = ["dog", "elephant", "fish", "frog", "lion", "rabbit", "tiger"];

let randomAnimal = "";
let userSelection = " ";
let currentAnimal = getRndAnimal();
//Get the elements from the DOM
let images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
  images[i].onmouseover = select;
  images[i].onmouseout = deselect;
  images[i].addEventListener(
    "click", //When the image is clicked
    function (
      e //Execute an anonymous function that
    ) {
      playGame(e); //passes the object to placy the game
    }
  );

  "onmouseover", // when the mouse is mouseOver
    function (
      e // Execute the anonymous functionthat
    ) {
      select(e);
    };

  "onmouseout", // when the mouse is out
    function (e) {
      deselect(e);
    };
} // event listener

// * * * * * * * *
// *  Functions  *
// * * * * * * * *

function select(e) {
  this.style.border = "thick solid #0000FF";
}

function deselect(e) {
  this.style.border = "thin solid #0000FF";
}

// This function gets the name of a random animal from the animalName array
function getRndAnimal() {
  let returnAnimal = "";
  returnAnimal = animalName[getRnd()];
  document.getElementById("animal").innerHTML = returnAnimal;
  return returnAnimal;
}

// This function generates a random number between 1 and 7
function getRnd() {
  return Math.trunc(Math.random() * 6) + 1;
}

function playGame(e) {
  let feedBack = document.getElementById("feedback");
  let correctGuess = false;
  let clickedItem = e.target.alt;

  do {
    //console.log(e);
    console.log("current animal " + currentAnimal);
    console.log("user selection " + clickedItem);
    if (currentAnimal != clickedItem) {
      //console.log("incorrect answer, try again");
      feedback.innerHTML = "Incorrect answer, try again...";
    } else {
      feedback.innerHTML = "Correct answer! try next word:";
      //alert("Try to find the next animal");
      //console.log("good job!");
      // clear feedback
      //feedback.innerHTML = "";

      // Select a different animal
      //setTimeout(doNothing, 3000);
      currentAnimal = getRndAnimal();
      //alert("Try to find the next animal:  " + currentAnimal);
      correctGuess = true;
    }
  } while ((correctGuess = false));
} // end playGame
