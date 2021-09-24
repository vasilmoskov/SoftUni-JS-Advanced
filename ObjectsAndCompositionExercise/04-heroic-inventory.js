function solution(strings) {

    let result = [];

    for (let i = 0; i < strings.length; i++) {
        let tokens = strings[i].split(' / ');

        let hero = {
            name: tokens[0],
            level: Number(tokens[1]),
            items: tokens[2] ? tokens[2].split(', ') : [],
        }

        result.push(hero);

    }

    let myJSON = JSON.stringify(result);

    console.log(myJSON);
}

solution(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

solution(['Jake / 1000 / Gauss, HolidayGrenade']);