function solve (clazz) {
    clazz.prototype.species = 'Human';
    clazz.prototype.toSpeciesString = function () {
        return  `I am a ${this.species}. ${this.toString()}`
    }
}
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

console.log(solve(Person.toString()));