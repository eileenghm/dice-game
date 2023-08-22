var randomNumber1 = Math.floor(Math.random() * 6) + 1; //set rand 1 to 6

var randDiceImg = "dice" + randomNumber1 + ".png"; //image1 after random
var path = "./images/";

let images = document.querySelectorAll("img"); //image0, image1 list
images[0].setAttribute("src", path + randDiceImg);


//repeat for image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //set rand 1 to 6
randDiceImg = "dice" + randomNumber2 + ".png"; //image1 after random
images[1].setAttribute("src", path + randDiceImg);


//player wins change font
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}