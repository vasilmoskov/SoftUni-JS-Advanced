function solution (string1, string2, string3) {
    let sumLength = string1.length + string2.length + string3.length;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solution('chocolate', 'ice cream', 'cake');
solution('pasta', '5', '22.3');