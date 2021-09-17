function printArr(arr) {
    let newArr = [];

    let number = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case 'add':
                newArr.push(number);
                break;
            case 'remove':
                newArr.pop();
                break;

        }

        number++;
    }

    if (newArr.length == 0) {
        console.log('Empty');
    } else{
        for (const elem of newArr) {
            console.log(elem);
        }
    }
}

printArr(['add', 
'add', 
'add', 
'add']
);

printArr(['add', 
'add', 
'remove', 
'add', 
'add']
);

printArr(['remove', 
'remove', 
'remove']
);
