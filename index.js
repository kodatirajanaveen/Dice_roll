var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

var randomDiceImage1 = "dice"+randomNumber1+".png"; // Dice1 to Dice6

var randomDiceImageSrc1 = "images/"+randomDiceImage1; // images/dice1 to dice6

var img1= document.querySelectorAll("img")[0];
// var img1= document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImageSrc1);
// img2.setAttribute("src", randomDiceImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomDiceImageSrc2 = "images/"+randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImageSrc2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
