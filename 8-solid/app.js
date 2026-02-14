"use strict";
a = 1;
class Personage {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  #_speak(message) {
    console.log(`${this.name} говорит на ${this.language}: ${message}`);
  }

  talk(message) {
    this.#_speak(message);
  }
}

class Ork extends Personage {
  constructor(name, language, weapon) {
    super("Ork", name, language);
    this.weapon = weapon;
  }
  kick() {
    console.log(`${this.name} ударил ${this.weapon}`);
  }

  talk(message) {
    super.talk(message + ` размахивая ${this.weapon}`);
  }
}

class Elf extends Personage {
  constructor(name, language, magic) {
    super("Elf", name, language);
    this.magic = magic;
  }
  createMagick() {
    console.log(`${this.name} создал магию ${this.magic}`);
  }
  talk(message) {
    super.talk(message + " растягивая слова");
  }
}

const ork = new Ork("Grom", "Orkish", "Gisarm");
ork.talk("Hello");
ork.kick();

const elf = new Elf("Legolas", "Elvish", "Fire");
elf.talk("Hello");
elf.createMagick();
