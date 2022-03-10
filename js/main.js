"use strict";

const rollDiceOne = document.getElementById('roll1');
const rollDiceTwo = document.getElementById('roll2');


const getDice = function() {
      const showDice1 = document.querySelector('.dice-roll');
      const showDice2 = document.getElementById('dice-roll-1');
      let rolledDice = Math.trunc(Math.random() * 6) + 1;
      const diceImage = "images/" + rolledDice + ".jpg";
      if(rolledDice === 1) {
            showDice1.classList.remove('hidden');
            // image.setAttribute("images" "images/dice1.jpg");
      }
      console.log(`You rolled a ${rolledDice}`);
}

rollDiceOne.addEventListener('click', getDice);
rollDiceTwo.addEventListener('click', getDice);

function whoWins(){
      rollDiceOne > rollDiceTwo ? console.log(`Player One Wins`) : console.log(`Player Two Wins`);
}