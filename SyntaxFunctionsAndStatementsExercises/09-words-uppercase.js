function solution(str) {
    console.log(str.match(/[a-zA-Z0-9]+/g).map(x => x.toUpperCase()).join(', '));
}

solution('Hi, how are you?');
