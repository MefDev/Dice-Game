function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

var randomNum1 = getRandomArbitrary(1, 7);
var randomNum2 = getRandomArbitrary(1, 7);
document.querySelector("img.img1").setAttribute("src", "images\\dice" + randomNum1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images\\dice" + randomNum2 + ".png");
if ( randomNum1 === 6 && randomNum2 === 6)
{
    document.querySelector("h1").textContent = "Dice Me";
}



 else if (randomNum1 > randomNum2)
 {
    document.querySelector("h1").textContent = "Player 1 wins the Game";
 }
 else if (randomNum2 > randomNum1) 
 {
    document.querySelector("h1").textContent = "Player 2 wins the Game";
 }
 else if (randomNum2 === randomNum2) {
    document.querySelector("h1").textContent = "A draw, Dice again";
 }