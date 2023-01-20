class Ninja {
    constructor(name, health, speed = 10, strength = 10) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength 
    }

    sayName() {
        console.log(`Yo what's up, my name is ${ this.name }!`)
    }
    
    showStats() {
        console.log(`${ this.name }'s health level is ${ this.health }, and they have ${ this.speed } speed, and ${ this.strength } strength!`);
    }

    drinkSake() {
        console.log("They are drinking Sake!");
        this.health += 10
        return this;
    }
}

const ninja1 = new Ninja("Morn", 100);
ninja1.sayName();
console.log("-----------------------------------")
ninja1.showStats();
console.log("-----------------------------------")
ninja1.drinkSake();
console.log("-----------------------------------")
ninja1.showStats();
console.log("-----------------------------------")

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength, wisdom)
        this.health = health;
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Your wise quote is: Practice makes perfect!");
    }
}

const superSensei = new Sensei("Master Jarrett Elijah Burgess");
superSensei.speakWisdom();
console.log("-----------------------------------")
superSensei.showStats();
console.log("-----------------------------------")
