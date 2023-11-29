let total = 0;

function sumOfDigits() {
    let input = prompt("Enter a number:");
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    total += sum;
    console.log("Current sum is " + total);
    if (total > 100) {
        console.log("It's over!");
    }
}
