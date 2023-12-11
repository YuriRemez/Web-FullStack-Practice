let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let diceImg1 = "./images/dice" + randomNumber1 + ".png";
let diceImg2 = "./images/dice" + randomNumber2 + ".png";
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
dice1.setAttribute("src", diceImg1);
dice2.setAttribute("src", diceImg2);

let gameResult = "Draw";
if (randomNumber1 > randomNumber2) {
    gameResult = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    gameResult = "Palyer 2 Wins";
}

document.querySelector(".container > h1").textContent = gameResult;
