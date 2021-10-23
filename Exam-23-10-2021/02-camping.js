class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let price = this.priceForTheCamp[condition];

        if (price == undefined) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < price) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        let participant = this.listOfParticipants.find(p => p.name == name);

        if (participant == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let firstPlayer = this.listOfParticipants.find(p => p.name == participant1);

        if (firstPlayer == undefined) {
            throw new Error(`Invalid entered name/s.`);
        }

        switch (typeOfGame) {
            case "WaterBalloonFights":

                let secondPlayer = this.listOfParticipants.find(p => p.name == participant2);

                if (secondPlayer == undefined) {
                    throw new Error(`Invalid entered name/s.`);
                }

                if (firstPlayer.condition != secondPlayer.condition) {
                    throw new Error(`Choose players with equal condition.`);
                }

                if (firstPlayer.power == secondPlayer.power) {
                    return `There is no winner.`;
                } else if (firstPlayer.power > secondPlayer.power) {
                    firstPlayer.wins += 1;
                    return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
                } else if (firstPlayer.power < secondPlayer.power) {
                    secondPlayer.wins += 1;
                    return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
                }

                break;

            case "Battleship":
                firstPlayer.power += 20;
                return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString () {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
        .sort((p1, p2) => p2.wins - p1.wins)
        .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

