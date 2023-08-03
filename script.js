const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-contanier");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

// this would be a good place to connect to a random word api
const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);
