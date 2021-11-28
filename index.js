var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Another Solution
// var arrayOfImages = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
// document.querySelector(".img1").src = arrayOfImages[randomNumber1-1];

var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
