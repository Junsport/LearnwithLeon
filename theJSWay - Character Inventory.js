// theJSWay ~ Character inventory

// Improve the example RPG to add character inventory management according to the following rules:

//     A character's inventory contains a number of gold and a number of keys.

//     Each character begins with 10 gold and 1 key.

//     The character description must show the inventory state.

//     When a character slays another character, the victim's inventory goes to its vanquisher.

// Here's the expected execution result.

console.log("Welcome to the adventure! Here are our heroes:");


class Character {
  constructor(name, health, strength, gold, keys) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = gold
    this.keys = keys
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`);
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this
            .name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated). ${monster.gold} and ${monster.keys} key(s) goes to the vanquisher`);
    }
  }
  // Return the character description
describe() {
   return `${this.name} has ${this.health} health points, ${this
     .strength} as strength and ${this.xp} XP points, amount of gold: ${this.gold}, number of key(s): ${this.keys}`;
  }
}
const aurora = new Character("Aurora", 150, 25, 10, 1)
const glacius = new Character("Glacius", 130, 30, 10, 1)


console.log(aurora.describe());

console.log(glacius.describe());

const monster = new Character("Spike", 40, 20, 10, 1);
console.log("A wild monster has appeared: it's named " + monster.name)

monster.attack(aurora)
monster.attack(glacius)
aurora.attack(monster)
glacius.attack(monster)

console.log(aurora.describe());
console.log(glacius.describe());