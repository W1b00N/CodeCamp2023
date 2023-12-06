function calculateHypotenuse(a, b) {
    return Math.sqrt(a**2 + b**2);
}
let sideA = 3;
let sideB = 4;
let hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(`The hypotenuse of the right-angled triangle with sides ${sideA} and ${sideB} is ${hypotenuse}`);
