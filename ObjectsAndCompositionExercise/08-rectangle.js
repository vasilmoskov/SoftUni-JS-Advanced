function createRectangle(width, height, color) {

    let rectangle = {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea: function() {
            return this.width * this.height;
        }
    }

    return rectangle;
}

let rect = createRectangle (4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());