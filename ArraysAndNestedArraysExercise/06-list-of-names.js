function printNumberedAndSortedNames(names) {
    names.sort((a, b) => a.localeCompare(b));

    let number = 1;

    for (const name of names) {
        console.log(`${number++}.${name}`)
    }
}

printNumberedAndSortedNames(["John", "Bob", "Christina", "Ema"]);
printNumberedAndSortedNames(["John", "bob", "Christina", "Ema"]);