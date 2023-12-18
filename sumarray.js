let arr = [10, 20, 30, 40, 50, 60]

let sum = 0

for (let el of arr) {
    sum += el
}

console.log(sum)

arr.reduce((acc, el) => {
    return acc += el
}, 0)