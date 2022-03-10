"use strict";

const rollDiceOne = document.getElementById('roll1');
const rollDiceTwo = document.getElementById('roll2');


const getDice = function() {
      const showDice1 = document.querySelector('.dice-roll');
      let rolledDice1 = Math.trunc(Math.random() * 6) + 1;
      const diceImageSource = "images/dice-" + rolledDice1 + ".jpg";
      let diceImage1 = document.querySelectorAll("img")[0];
      
      showDice1.classList.remove('hidden');
      diceImage1.setAttribute("src", diceImageSource);
      console.log(`You rolled a ${rolledDice1}`);
}

const getDice2 = function() {
      const showDice2 = document.querySelector('.dice-roll-1');
      let rolledDice2 = Math.trunc(Math.random() * 6) + 1;
      const diceImageSource2 = "images/dice-" + rolledDice2 + ".jpg";
      let diceImage2 = document.querySelectorAll("img")[1];
      
      showDice2.classList.remove('hidden');
      diceImage2.setAttribute("src", diceImageSource2);
      console.log(`You rolled a ${rolledDice2}`);
}

rollDiceOne.addEventListener('click', getDice);
rollDiceTwo.addEventListener('click', getDice2);

if(rolledDice1 > rolledDice2){
      document.querySelector('h2').innerHTML = "Player One Wins!"
}