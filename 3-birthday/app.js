"use strict";

function isAgeValid(birthdayString) {
  const today = new Date();
  const birthdayDate = new Date(birthdayString);
  const different = today - birthdayDate;
  return Math.floor(different / (1000 * 60 * 60 * 24 * 365)) > 14;
}

console.log(isAgeValid("2006-01-01"));
