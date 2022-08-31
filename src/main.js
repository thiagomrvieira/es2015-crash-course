// Rest operator
function sumRest(...numbers) {
    return numbers.reduce((prev, current) => prev + current)
}

alert('rest:' + sumRest(1, 2, 3));

// Spread operator
function sumSpread(x, y) {
    return numbers.reduce((prev, current) => prev + current)
}

let numbers = [1, 2];
alert('spread:' + sumSpread(...numbers));
