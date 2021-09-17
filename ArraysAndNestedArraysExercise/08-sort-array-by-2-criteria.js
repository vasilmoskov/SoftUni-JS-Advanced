function printSortedArray(arr) {
    arr.sort((a, b) => {
       let res = a.length - b.length;

       if(res == 0) {
           res = a.localeCompare(b);
       }

       return res;
    });

    for (const elem of arr) {
        console.log(elem);
    }
}

printSortedArray(['alpha', 
'beta', 
'gamma']
);

printSortedArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

);
printSortedArray(['test', 
'Deny', 
'omen', 
'Default']
);

