import { Task } from "./task.js";

export class User {
  constructor(task) {
    if (!(task instanceof Task)) {
      throw new Error("передаваемый класс не соответствует ожидаемому");
    }
    this.task = task;
  }

  do() {
    this.task.run();
  }
}
