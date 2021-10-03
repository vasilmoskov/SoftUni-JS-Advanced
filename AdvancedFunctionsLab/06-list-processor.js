function solution(input) {

    let result = [];

    let commands = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(el => el != str),
        print: () => console.log(result.join(','))
    }

    for (const curr of input) {
        let [command, str] = curr.split(' ');

        commands[command](str); 
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);