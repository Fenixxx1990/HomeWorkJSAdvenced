"use strict";

class Car {
  #mileage;
  #mark;
  #model;
  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#mileage = mileage;
  }
  info() {
    return `
    Марка: ${this.#mark}
    Модель: ${this.#model}
    Пробег: ${this.#mileage}
    `;
  }
  set mileage(value) {
    this.#mileage = value;
  }
  get mileage() {
    return this.#mileage;
  }
}

const prius = new Car("Toyota", "Prius", "50000");

console.log(prius);
console.log(prius.info());
prius.mileage = 100000;
console.log(prius.mileage);
console.log(prius);
console.log(prius.info());
