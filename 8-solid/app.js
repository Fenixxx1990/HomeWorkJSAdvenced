"use strict";

class Billing {
  constructor(amount) {
    if (amount < 0) {
      throw new Error("Amount не может быть отрицательным");
    }
    this.amount = amount;
  }

  // Абстрактный метод — должен быть переопределён в подклассах
  calculateTotal() {
    throw new Error(
      "Метод calculateTotal() должен быть реализован в подклассе",
    );
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return this.amount; // просто возвращаем amount
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    if (hours < 0) {
      throw new Error("Часы не могут быть отрицательными");
    }
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours; // amount × часы
  }
}

class ItemBilling extends Billing {
  constructor(amount, itemsCount) {
    super(amount);
    if (itemsCount < 0) {
      throw new Error("Количество элементов не может быть отрицательным");
    }
    this.itemsCount = itemsCount;
  }

  calculateTotal() {
    return this.amount * this.itemsCount; // amount × количество
  }
}

// Создаём разные типы биллингов
const fix = new FixBilling(1000);
const hour = new HourBilling(500, 3); // 500 ₽/час × 3 часа
const item = new ItemBilling(200, 5); // 200 ₽/ед × 5 ед.

// Единый интерфейс — разный результат
console.log(fix.calculateTotal()); // 1000
console.log(hour.calculateTotal()); // 1500
console.log(item.calculateTotal());
