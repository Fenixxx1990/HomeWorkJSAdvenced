"use strict";

const array = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
];

const newSet = new Set(array.map((item) => item.name));

const clearArray = [...newSet].map((name) => ({
  id: array.find((item) => item.name === name).id,
  name: name,
}));

console.log(clearArray);
