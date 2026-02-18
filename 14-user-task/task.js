export class Task {
  constructor(messege) {
    if (typeof messege !== "string") {
      throw new Error("Некорректный тип данных");
    }
    this.messege = messege;
  }

  run() {
    console.log(this.messege);
  }
}
