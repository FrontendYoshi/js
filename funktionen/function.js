
function add(a, b) {
    return a + b;
}
function substract (a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let summe = add(5, 3);
let quotient = divide (10, 2);
let differenz = substract (5, 3);
let product = multiply (2, 5);

console.log(summe);
console.log(quotient)
console.log(product);
console.log(differenz);

function customerName(firstname) {
    return "Hallo, "+firstname+"!";
};
console.log (customerName("Noah")); // Ausgabe: Hallo, Noah !

let begruessen = function(name) {
    return "Hallo," + name + "!";
    }
    console.log(begruessen("Noah"));

