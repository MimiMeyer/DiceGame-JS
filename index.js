
if (window.performance.navigation.type === 1) {
    rollDice();
}


function rollDice(){
/**img1**/
var randomNumber1 = Math.floor(Math.random() * 6 + 1);//1-6

var srcImg1= "images/dice"+ randomNumber1 +".png";//images/dice1.png-images/dice6.png

document.querySelector(".img1").setAttribute("src",srcImg1);

/**img2**/
var randomNumber2 = Math.floor(Math.random() * 6 + 1);//1-6

var srcImg2= "images/dice"+ randomNumber2 +".png";//images/dice1.png-images/dice6.png

document.querySelector(".img2").setAttribute("src",srcImg2);


changeTitle(randomNumber1, randomNumber2);
}



function changeTitle(num1, num2) {

//if player1 wins
if(num1>num2){
  document.querySelector("h1").textContent= "🚩Player 1 wins!"
}
//if player2 wins
else if(num2>num1){
  document.querySelector("h1").textContent= "Player2 wins!🚩"
}
//if its a draw
else{
  document.querySelector("h1").textContent= "Draw!"
}
}
