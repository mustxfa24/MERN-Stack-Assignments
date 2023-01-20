class Ninja {
    constructor(name, health, speed = 10, strength = 10) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength 
    }

    sayName() {
        console.log(`${ this.name }`)
    }
    
    showStats() {
        this.speed += 0;
        this.strength += 0;
        return this;
    }

    drinkSake() {
        console.log("Drinking my Sake!");
        this.health += 10
        return this;
    }
}

const ninja = new Ninja("Hyabusa", 150, 10, 10)
ninja.sayName();
ninja.drinkSake();
// ninja.showStats();
console.log(ninja);