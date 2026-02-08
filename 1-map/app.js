"use strict";

const array = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const newSet = new Set(array.map((item) => item.name));

console.log(newSet);
