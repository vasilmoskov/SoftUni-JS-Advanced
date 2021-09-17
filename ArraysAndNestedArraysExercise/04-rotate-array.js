function printRotatedArray (arr, rotations) {

    for(let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

printRotatedArray(['1', 
'2', 
'3', 
'4'], 
2
);
printRotatedArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);