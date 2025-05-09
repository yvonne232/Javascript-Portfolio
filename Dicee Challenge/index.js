var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomDicePng1 = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDicePng1);

var randomNumber2= Math.floor(Math.random() * 6) + 1;
var randomDicePng2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDicePng2);

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "⛳️Play 2 Wins!"
}
if (randomNumber2 < randomNumber1) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!⛳️"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}