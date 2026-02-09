"use strict";

function rollOfDice(diceModel) {
  const maxValue = Number(diceModel.replace("d", ""));
  return Math.floor(Math.random() * maxValue + 1);
}

console.log(rollOfDice("d20"));
