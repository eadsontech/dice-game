// image 1 js
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomImage = "dice" + randomNumber1 + ".png";

const randomImageSource = "./images/" + randomImage;

const image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource)

// image 2 js
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImage2 = "dice" + randomNumber2 + ".png";

const randomImageSource2 = "./images/" + randomImage2;
const image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else{
    document.querySelector('h1').innerHTML= "It's a draw"
}

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();