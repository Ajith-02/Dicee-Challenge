var diceRole1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + diceRole1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var diceRole2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/dice" + diceRole2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(diceRole1 > diceRole2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(diceRole2 > diceRole1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}