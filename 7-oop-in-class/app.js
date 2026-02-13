const Pers = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Pers.prototype.speak = function () {
  console.log(this.language, this.name);
};

const OrcClass = function (race, name, language) {
  Pers.call(this, race, name, language);
};

OrcClass.prototype = Object.create(Pers.prototype);

OrcClass.prototype.kick = function () {
  console.log("I kick");
};

const ELfClass = function (race, name, language) {
  Pers.call(this, race, name, language);
};

ELfClass.prototype = Object.create(Pers.prototype);

ELfClass.prototype.createMagick = function () {
  console.log("I create magick");
};

const orc = new OrcClass("Orc", "Grom", "Orcish");
orc.kick();
orc.speak();
const elf = new ELfClass("Elf", "Legolas", "Elvish");
elf.createMagick();
elf.speak();
