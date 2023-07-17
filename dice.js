// Random number generator
var palyer1 = Math.floor((Math.random() * 6) + 1);
var palyer2 = Math.floor((Math.random() * 6) + 1);


//  The image logic for player 1
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

// dice image logic
img1.setAttribute("src","./images/dice"+palyer1+".png" );
img2.setAttribute("src","./images/dice"+palyer2+".png" );




// THE game conditon logic
if (palyer1 === palyer2) {
  document.querySelector("h2").innerHTML = "The Game is Draw 🤜🤛";
}
else if (palyer1 > palyer2) {
  document.querySelector("h2").innerHTML = "The Player 1 is Winner 🏆";
  document.querySelector("h2").style.color = "red"
}
else {
  document.querySelector("h2").innerHTML = "The Player 2 is Winner 🏆";
  document.querySelector("h2").style.color = "yellow"
}