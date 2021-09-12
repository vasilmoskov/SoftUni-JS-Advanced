// let arr = [];
// arr[3.4] = 'Oranges';
// arr[-1] = 'Apples';
// console.log(arr.length);                // 0
// console.log(arr.hasOwnProperty(3.4));   // true
// arr["1"] = 'Grapes';
// console.log(arr.length);                // 2
// console.log(arr); // [ <1 empty item>, 'Grapes', '3.4': 'Oranges', '-1': 'Apples' ]

// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[3.4]);

// let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
// words.sort((a, b) => a.localeCompare(b));
// // ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

// let words2 = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
// words2.sort();

// // console.log(words);
// console.log(words2);


// let words = ['Eggs', 'Grip', 'bite', 'jAw', 'nest'];

// // console.log(words);

// words.slice;

// console.log(words);

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits.includes('Banana'));
console.log(fruits.includes('Banana', 1));

let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();

console.log(fruitsCopy);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']


